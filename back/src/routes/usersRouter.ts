import {Router} from "express";
import {
  register,
  getAllUsers,
  getUserById,
  login,
} from "../controllers/usersController";

const usersRouter: Router = Router();

usersRouter.get("/", getAllUsers);
usersRouter.get("/:id", getUserById);
usersRouter.post("/register", register);
usersRouter.post("/login", login);

export default usersRouter;
