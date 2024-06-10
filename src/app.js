import express from "express";
import postRoutes from "./routes/Post.routes.js";
import bodyParser from "body-parser";

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));




app.use("/api", postRoutes);


export default app;