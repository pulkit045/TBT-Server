import { Router } from "express";
import * as usersController from './user';
const userRouter = Router();

userRouter.get('/login', usersController.login);

export default userRouter;