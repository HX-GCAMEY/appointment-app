import {Credentials} from "../interfaces/Credentials";
import {User} from "../interfaces/User";
import {
  createCredentiasService,
  credentialsValidationService,
} from "./credentialService";

const users: User[] = [
  {
    id: 1,
    name: "Bartolomiau",
    email: "barto@gmail.com",
    address: "argentina",
    phone: "123456",
    profile_pic: "laurl.jpg",
    credentials: 1,
    appointments: [],
  },
];
export const getAllUsersService = async (): Promise<User[]> => {
  return await users;
};

export const getUserByIdService = async (
  id: number
): Promise<User | undefined> => {
  const user = users.find((user) => user.id === id);

  return await user;
};

export const createUserService = async (user: any): Promise<User> => {
  const {password, email} = user;

  const newCredentials = await createCredentiasService({email, password});

  const newUser = {
    id: users.length + 1,
    credentials: newCredentials,
    ...user,
  };

  users.push(newUser);

  return await newUser;
};

export const loginService = async (
  credentials: Credentials
): Promise<User | undefined> => {
  const validateCredentials = await credentialsValidationService(credentials);

  if (!validateCredentials) {
    return undefined;
  }

  const user = users.find((user) => user.credentials === validateCredentials);

  return await user;
};
