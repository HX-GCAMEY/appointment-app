import server from "./server";
import dotenv from "dotenv";
import "reflect-metadata";
import {AppDataSource} from "./config/dataSource";
dotenv.config();

const PORT = process.env.PORT || 3000;

AppDataSource.initialize()
  .then(() => {
    console.log("Database connected");
    server.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log("Error connecting to database: ", error);
  });
