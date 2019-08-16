import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstName: {
        type: String,
        required: "First Name is required"
    },
    lastName: {
        type: String,
        required: "Last Name is required"
    },
    email: {
        type: String,
        required: "Email is required"
    },
    password: {
        type: String,
        required: "Password is required"
    }
});

export default UserSchema;
