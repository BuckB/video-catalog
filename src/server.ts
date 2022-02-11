import "reflect-metadata";
import express from "express";
import { createConnection } from "typeorm";

const app = express();
app.use(express.json());

app.listen(3000, () => console.log("Server is running."));

createConnection().then(async connection => {
    console.log("connected...");
}).catch(error => console.log(error));
