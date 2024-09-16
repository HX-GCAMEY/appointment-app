import {Credentials} from "../interfaces/Credentials";

export const credentialsArray: Credentials[] = [
  {
    id: 1,
    email: "barto@gmail.com",
    password: "12345",
  },
];

export const createCredentiasService = async (
  credentials: Credentials
): Promise<number> => {
  const newCredentials = {
    id: credentialsArray.length + 1,
    ...credentials,
  };

  credentialsArray.push(newCredentials);

  return await newCredentials.id;
};

export const credentialsValidationService = async (
  credentials: Credentials
): Promise<number | undefined> => {
  const {email, password} = credentials;
  const credential = credentialsArray.find(
    (credential) =>
      credential.email === email && credential.password === password
  );
  return await credential?.id;
};
