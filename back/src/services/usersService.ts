import {userModel} from "../config/dataSource";
import User from "../entities/User";
import Credential from "../entities/Credential";
import {
  createCredentiasService,
  credentialsValidationService,
} from "./credentialService";
import {CreateUserDto} from "../dtos/CreateUserDto";
import {ValidateCredentialsDto} from "../dtos/ValidateCredentialsDto";

export const getAllUsersService = async (): Promise<User[]> => {
  return await userModel.find({relations: {appointments: true}});
};

export const getUserByIdService = async (id: number): Promise<User | null> => {
  const user = await userModel.findOne({
    where: {id},
    relations: {
      appointments: true,
    },
  });

  return await user;
};

export const createUserService = async (
  user: CreateUserDto
): Promise<User | null> => {
  const {password, email} = user;
  const newUser = userModel.create(user);
  await userModel.save(newUser);

  const newCredentials: Credential = await createCredentiasService({
    email,
    password,
  });
  newUser.credential = newCredentials;
  await userModel.save(newUser);

  return await newUser;
};

export const loginService = async (
  credentials: ValidateCredentialsDto
): Promise<User | null> => {
  const validateCredentials = await credentialsValidationService(credentials);

  if (!validateCredentials) {
    throw new Error("Invalid credentials");
  }

  const user = await getUserByIdService(validateCredentials.id);

  return user;
};
