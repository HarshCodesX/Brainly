"use strict";
// Add config, create user models and schema here;
// mongodb+srv://harsh7562:whoooisharsh@mycluster.pffdh.mongodb.net/
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
var mongoose = ;
{
    model, Schema;
}
from;
"mongoose";
mongoose.connect("mongodb://localhost:27017/brainly");
const UserSchema = new Schema({
    username: {
        type: String,
        unique: true
    },
    Password: String
});
exports.UserModel = model(UserSchema, "User");
//# sourceMappingURL=db.js.map