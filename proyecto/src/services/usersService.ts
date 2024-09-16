export const getAllUsersService = async () => {
  return await "Devolver todos los usuarios";
};

export const getUserByIdService = async (id: number) => {
  return await "Devolver usuario por id";
};

export const createUserService = async (user: any) => {
  return await "Crear usuario";
};

export const loginService = async (credentials: any) => {
  return await "Loguear usuario";
};
