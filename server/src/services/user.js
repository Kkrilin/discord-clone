import UserController from '../controllers/user.js';
import config from '../config/config.js';
import jwt from 'jsonwebtoken';
import bycrypt from 'bcrypt';

export const registerUser = async function (req, res, next) {
  const values = req.body;
  try {
    const user = await UserController.registerUser(values);
    if (user) {
      const token = jwt.sign({ id: user.id }, config.secretKey, {
        expiresIn: config.jwtExpiration,
      });
      //   res.cookie('jwt', token, { maxAge: 24 * 60 * 60 * 1000, httpOnly: true });
      res.status(201).json({
        success: 1,
        userData: { id: user.id, name: user.userName, email: user.email },
        token,
      });
    } else {
      res.status(409).send({ success: 0, message: 'details are not correct' });
    }
  } catch (error) {
    error.status = 409;
    next(error);
  }
};

export const login = async function (req, res, next) {
  try {
    const { email, password } = req.body;
    const user = await UserController.findOneByEmail(email);
    if (user) {
      const isSame = await bycrypt.compare(password, user.password);
      if (isSame) {
        const token = jwt.sign({ id: user.id }, config.secretKey, {
          expiresIn: config.jwtExpiration,
        });
        // res.cookie('jwt', token, {
        //   maxAge: 24 * 60 * 60 * 1000,
        //   httpOnly: true,
        // });
        delete user.password;
        return res.status(200).json({
          success: 1,
          userData: user,
          token,
        });
      } else {
        throw new Error('Authentication failed');
      }
    } else {
      throw new Error('Authentication failed');
    }
  } catch (error) {
    error.status = 401;
    next(error);
  }
};

// export const updateUser = async function (req, res, next) {
//   const { userId } = req;
//   const { email, name } = req.body;
//   const value = {
//     email,
//     name,
//   };
//   try {
//     const userById = await UserController.findOneById(userId);
//     if (!userId) {
//       throw new Error('user does not exist');
//     }
//     if (userById.email !== email) {
//       const userByEmail = await UserController.findOneByEmail(email);
//       if (userByEmail) {
//         throw new Error('email is already in use');
//       }
//       const baseProfileSlug = utils.slugify(email.split('@')[0]);
//       const profileSlug = await utils.uniqueProfileSlug(baseProfileSlug);
//       value.profileSlug = profileSlug;
//     }
//     const user = await userById.update(value);
//     return res.status(200).json({
//       success: 1,
//       userData: { id: user.id, name: user.name, email: user.email },
//     });
//   } catch (error) {
//     error.status = 409;
//     next(error);
//   }
// };
