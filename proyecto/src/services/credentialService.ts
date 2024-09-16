import {credentialModel} from "../config/dataSource";
import {CreateCredentialsDto} from "../dtos/CreateCredentials";
import {ValidateCredentialsDto} from "../dtos/ValidateCredentialsDto";
import Credential from "../entities/Credential";

export const createCredentiasService = async (
  credentials: CreateCredentialsDto
): Promise<Credential> => {
  const newCredentials: Credential = await credentialModel.create(credentials);
  await credentialModel.save(newCredentials);

  return newCredentials;
};

export const credentialsValidationService = async (
  credentials: ValidateCredentialsDto
): Promise<Credential | null> => {
  const {email, password} = credentials;
  const credential: Credential | null = await credentialModel.findOneBy({
    email,
  });
  if (!credential) {
    throw new Error("Invalid credentials");
  }
  if (credential?.password !== password) {
    throw new Error("Invalid credentials");
  }
  return credential;
};
