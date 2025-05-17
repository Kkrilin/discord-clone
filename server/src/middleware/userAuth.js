import UserController from '../controllers/user.js';
import jwt from 'jsonwebtoken';
import config from '../config/config.js';
import bycrypt from 'bcrypt';
// validate register request
export const validateSignUp = async (req, re, next) => {
  const { userName, email, password } = req.body;

  try {
    if (!userName || !email || !password) {
      throw new Error(`please send ${!userName || !email || !password}`);
    }
    const userByName = await UserController.findOneByName(userName);
    if (userByName) {
      throw new Error('Invalid request: userName is already in use');
    }
    const user = await UserController.findOneByEmail(email);
    if (user) {
      throw new Error('Invalid request: userEmail is already in use');
    }
    console.log('password', password);
    req.body.password = await bycrypt.hash(password, 10);
    next();
  } catch (error) {
    error.status = 400;
    next(error);
  }
};

// validate login request
export const validateLogin = async (req, res, next) => {
  const { email } = req.body;
  try {
    const user = await UserController.findOneByEmail(email);
    if (!user) {
      throw new Error('user with email is not regsiter');
    }
    next();
  } catch (error) {
    error.status = 401;
    next(error);
  }
};

// authenticate protected routes
export const authenticate = async (req, res, next) => {
  // const authHeader = req.headers['authorization'];
  // const token = authHeader && authHeader.split(' ')[1]; // Extract token from "Bearer <token>"
  const token = req.cookies.jwt;
  try {
    if (!token) {
      throw new Error('user authentication falied');
    }
    const decoded = jwt.verify(token, config.secretKey);
    const user = await UserController.findOneById(decoded.id);
    if (!user) {
      throw new Error('user doest not exist');
    }
    req.userId = decoded.id;
    next();
  } catch (error) {
    error.status = 401;
    next(error);
  }
};
