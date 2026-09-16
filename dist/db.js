// Add config, create user models and schema here;
import mongoose, { model, Schema } from "mongoose";
mongoose.connect("mongodb+srv://harsh7562:whoooisharsh@mycluster.pffdh.mongodb.net/brainly");
const UserSchema = new Schema({
    username: {
        type: String,
        unique: true
    },
    password: String
});
const ContentSchema = new Schema({
    title: String,
    link: String,
    tags: [{ type: mongoose.Types.ObjectId, ref: 'Tag' }],
    userId: { type: mongoose.Types.ObjectId, ref: 'User', required: true }
});
export const UserModel = model("User", UserSchema);
export const ContentModel = model("Content", ContentSchema);
//# sourceMappingURL=db.js.map