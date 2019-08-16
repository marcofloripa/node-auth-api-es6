import mongoose from "mongoose";
import userSchema from "../models/User";

const User = mongoose.model("users", userSchema);

export function addUser(req, res) {
    let newUser = new User(req.body);
    newUser.save((error, user) => {
        if (error) {
            res.json(error);
        }
        res.status(201).json(newUser);
    });
}

export function getUsers(req, res) {
    User.find({}, (error, users) => {
        if (error) {
            res.json(error);
        }
        res.json(users);
    });
}

export function getUser(req, res) {
    User.findById(req.params.userId, (error, user) => {
        if (error) {
            res.json(error);
        }
        res.json(user);
    });
}
