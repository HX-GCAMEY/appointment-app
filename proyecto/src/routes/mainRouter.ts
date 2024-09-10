import {Router} from "express";
import usersRouter from "./usersRouter";

const indexRouter: Router = Router();

indexRouter.use("/users", usersRouter);
indexRouter.use("/appointments");

export default indexRouter;
