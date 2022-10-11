import { Router } from "express";
import * as usersController from './user.js';
const userRouter = Router();

userRouter.post('/signup', usersController.signup);
userRouter.post('/login', usersController.login);
userRouter.post('/valid-user', usersController.validUsername);
userRouter.post('/valid-email', usersController.validEmail);

export default userRouter;