// Add config, create user models and schema here;
// mongodb+srv://harsh7562:whoooisharsh@mycluster.pffdh.mongodb.net/

import {Model, Schema} from "mongoose";

const UserSchema = new Schema({
    username: {
        type: String,
        unique: true
    },
    Password: String
});

const userSchema = new Model(UserSchema, "User");