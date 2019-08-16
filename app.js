import express from "express";
import userRoutes from "./routes/users";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";

const app = express();
const PORT = 3000;

dotenv.config();

mongoose.Promise = global.Promise;
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {
    console.log("Connected to MongoDB!");
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

userRoutes(app);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
