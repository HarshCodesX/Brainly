// Add config, create user models and schema here;
import {model, Schema} from "mongoose";
const userModel = new Model({
    username: {
        type: String,
        unique: true
    }
})