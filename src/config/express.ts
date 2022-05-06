import express, { Application, Request, Response } from "express";
import morgan from "morgan";
require("dotenv").config();

const app: Application = express();
const cors = require("cors");
app.set("port", 3000);

app.use(
    cors({
        origin: "*"
    })
);
app.use(express.json({ limit: '50mb' }));
app.use(morgan("dev"));

app.get("/", (request: Request, response: Response):void => {
    response.send("Bienvenido!");
});

export default app;
