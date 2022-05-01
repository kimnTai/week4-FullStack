import express from "express";
import cors from "cors";
import morgan from "morgan";
import "dotenv/config";
import "./connection";
import "./model";
import * as Router from "./router";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(morgan("dev"));

app.use("/posts", Router.posts);
app.listen(process.env.PORT, () => console.log("伺服器啟動中"));

export default app;
