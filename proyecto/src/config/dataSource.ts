import {DataSource} from "typeorm";
import {config} from "dotenv";
import Appointment from "../entities/Appointment";
import User from "../entities/User";
import Credential from "../entities/Credential";
config();

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST || "localhost",
  port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 5432,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true,
  logging: false,
  entities: [Appointment, Credential, User],
  subscribers: [],
  migrations: [],
});

export const userModel = AppDataSource.getRepository(User);
export const appointmentModel = AppDataSource.getRepository(Appointment);
export const credentialModel = AppDataSource.getRepository(Credential);
