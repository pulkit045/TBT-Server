import  { Router } from "express";
import userRouter from "./users/index";


const indexRouter = Router();

indexRouter.use('/users', userRouter);

export default indexRouter;