import {Request, Response} from "express";

import {
  createUserService,
  getAllUsersService,
  getUserByIdService,
  loginService,
} from "../services/usersService";

export const getAllUsers = async (req: Request, res: Response) => {
  const users = await getAllUsersService();
  res.status(200).json(users);
};

export const getUserById = async (req: Request, res: Response) => {
  const {id} = req.params;
  const user = await getUserByIdService(parseInt(id));
  res.status(200).json(user);
};

export const register = async (req: Request, res: Response) => {
  const {name, email, password, address, phone, profile_pic} = req.body;

  const newUser = await createUserService({
    name,
    email,
    address,
    phone,
    profile_pic,
    password,
  });
  res.status(200).json(newUser);
};

export const login = async (req: Request, res: Response) => {
  const {email, password} = req.body;
  const user = await loginService({email, password});
  res.status(200).json({
    login: true,
    user,
  });
};
