//add db as a dependency in client/package.json
//add in transpilePackages
import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    username: {type: String},
    password: String,
});