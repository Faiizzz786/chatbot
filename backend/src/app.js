import express from "express";
import { config } from "dotenv";
import morgan from "morgan";
import appRouter from "./routes/index.js";
import cookieParser from "cookie-parser";
import cors from "cors";
config();
const app = express();

//middlewares
console.log(process.env.FRONTEND_URL)
app.use(cors({ origin: process.env.FRONTEND_URL, credentials: true }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(express.json());

app.use("/api/v1", appRouter);

export default app;
