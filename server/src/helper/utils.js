import slug from 'slug';
import db from '../models/index.js';
import UserController from '../controllers/user.js';

const utils = {};

utils.slugify = (val) => {
  if (val === null) {
    return null;
  }
  return (
    slug(val, {
      lower: true,
      remove: null,
    }) || val
  );
};

export default utils;
