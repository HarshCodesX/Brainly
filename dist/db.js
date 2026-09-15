// Add config, create user models and schema here;
// mongodb+srv://harsh7562:whoooisharsh@mycluster.pffdh.mongodb.net/brainly
import mongoose, { model, Schema } from "mongoose";
// mongoose.connect("mongodb://localhost:27017/brainly");
mongoose.connect("mongodb+srv://harsh7562:whoooisharsh@mycluster.pffdh.mongodb.net/brainly");
const UserSchema = new Schema({
    username: {
        type: String,
        unique: true
    },
    password: String
});
export const UserModel = model("User", UserSchema);
//# sourceMappingURL=db.js.map