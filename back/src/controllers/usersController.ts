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
  try {
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
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const {email, password} = req.body;
    const user = await loginService({email, password});
    res.status(200).json({
      login: true,
      user,
    });
  } catch (error) {
    res.status(401).json({
      login: false,
      message: error.message,
    });
  }
};
