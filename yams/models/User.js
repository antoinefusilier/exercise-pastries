import mongoose from "mongoose";

export const UserSchema = new mongoose.Schema({
    email: {
        type : String,
        required: true,
    },
    password: {
        type : String,
        required: true,
    },
    token:{
        type: String
    }
});

export const UserModel = mongoose.model('users', UserSchema);
