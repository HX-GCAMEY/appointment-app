import {Credentials} from "../interfaces/Credentials";
import {User} from "../interfaces/User";

export const getAllUsersService = async (): Promise<User[]> => {
  const users: User[] = [
    {
      name: "Bartolomiau",
      email: "barto@gmail.com",
      address: "argentina",
      phone: "123456",
      profile_pic: "laurl.jpg",
      credentials: {email: "barto@gmail.com", password: "12345"},
      appointments: [],
    },
  ];
  return await users;
};

export const getUserByIdService = async (
  id: number
): Promise<User | undefined> => {
  const user: User | undefined = {
    id: 1,
    name: "Bartolomiau",
    email: "barto@gmail.com",
    address: "argentina",
    phone: "123456",
    profile_pic: "laurl.jpg",
    credentials: {email: "barto@gmail.com", password: "12345"},
    appointments: [],
  };

  return await user;
};

export const createUserService = async (user: User): Promise<User> => {
  const newUser: User = {
    name: "Bartolomiau",
    email: "barto@gmail.com",
    address: "argentina",
    phone: "123456",
    profile_pic: "laurl.jpg",
    credentials: {email: "barto@gmail.com", password: "12345"},
  };

  return await newUser;
};

export const loginService = async (
  credentials: Credentials
): Promise<User | null> => {
  const user: User | undefined = {
    id: 1,
    name: "Bartolomiau",
    email: "barto@gmail.com",
    address: "argentina",
    phone: "123456",
    profile_pic: "laurl.jpg",
    credentials: {email: "barto@gmail.com", password: "12345"},
    appointments: [],
  };

  return await user;
};
