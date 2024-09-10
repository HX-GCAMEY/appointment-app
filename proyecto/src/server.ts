import express from "express";
import morgan from "morgan";
import cors from "cors";
import mainRouter from "./routes/mainRouter";

const server = express();

server.use(morgan("dev"));
server.use(express.json());
server.use(cors());

server.use(mainRouter);

export default server;
