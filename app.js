import express from "express";
import userRoutes from "./routes/users";
import mongoose from "mongoose";
import bodyParser from "body-parser";

const app = express();
const PORT = 3000;

mongoose.Promise = global.Promise;
mongoose.connect(
    "mongodb://localhost:27017/authapi",
    { useNewUrlParser: true },
    () => {
        console.log("Connected to MongoDB!");
    }
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api/users", userRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
