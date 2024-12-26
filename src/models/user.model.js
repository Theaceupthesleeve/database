import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        fullname: {
            type: String,
            require: true
        },
        email: {
            type: String,
            require: [true, 'email is required'],
            unique: [true, 'user already exists'],
        },
        password: {
            type: String,
            require: true,
        },
        username: {
            type: String,
            unique: [true , 'username already exists'],
            required: true
        },
    },
    {
        timestamps: true
    }

)