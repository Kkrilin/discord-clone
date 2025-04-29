import { Sequelize, DataTypes, Op } from 'sequelize';
import config from '../config/config.js';
import { logger } from '../helper/logger.js';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { dirname, join, basename as pathBasename } from 'node:path';
import fs from 'node:fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const basename = pathBasename(__filename);
// eslint-disable-next-line no-undef
const env = process.env.NODE_ENV || 'development';
const db = {};

// Initialize Sequelize
const useSSL = config.ssl === 'true';
const sequelize = new Sequelize(
  config.db.database,
  config.db.username,
  config.db.password,
  {
    host: config.db.host,
    port: config.db.port,
    dialect: config.db.dialect,
    logging: false,
    ssl: useSSL,
    dialectOptions: useSSL
      ? {
          ssl: {
            require: true,
            rejectUnauthorized: false,
          },
        }
      : {},
    pool: {
      max: 15,
      min: 5,
      acquire: 30000,
      idle: 10000,
    },
  },
);

// Dynamic import of model files
(async () => {
  const modelFiles = fs
    .readdirSync(__dirname)
    .filter(
      (file) =>
        file.indexOf('.') !== 0 &&
        file !== basename &&
        file.slice(-3) === '.js' &&
        file.indexOf('.test.js') === -1,
    );
  for (const file of modelFiles) {
    const modelModule = await import(pathToFileURL(join(__dirname, file)));
    const model = modelModule.default(sequelize, DataTypes);
    db[model.name] = model;
  }

  // Set up associations
  Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
      db[modelName].associate(db);
    }
  });

  db.sequelize = sequelize;
  db.Sequelize = Sequelize;
  db.Op = Op;

  // Sync database
  db.sequelize
    .sync({ force: false })
    .then(() => {
      logger.info('Database connected');
    })
    .catch((err) => {
      logger.error('Failed to sync db:', err);
    });
})();

export default db;
