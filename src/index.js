import  { Router } from "express";
import userRouter from "./users/index.js";

const indexRouter = Router();
indexRouter.use('/users', userRouter);


export default indexRouter;