import express from "express";
import { config } from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import { dbConnection } from "./database/db.js";
import { errorMiddleware } from "./middlewares/error.js";
// importing Routers
import messageRouter from "./router/messageRouter.js";
import userRouter from "./router/userRouter.js";
import appointmentRouter from "./router/appointmentRouter.js";

const app = express();
// Dotenv 
config({ path:"./config/.env"});
import dotenv from "dotenv";
dotenv.config();
// Use CORS and others

app.use(
  cors({
    origin: [process.env.FRONTEND_URL_ONE, process.env.FRONTEND_URL_TWO],
    method: ["GET", "POST", "DELETE", "PUT"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(errorMiddleware);
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);
// Importing mongoose and database connection

dbConnection();
// importing middleware

app.use("/api/v1/message", messageRouter);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/appointment", appointmentRouter);








export default app;
