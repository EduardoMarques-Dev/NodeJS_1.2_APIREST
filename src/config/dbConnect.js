import mongoose from "mongoose";

mongoose.connect("mongodb+srv://alura:admin@alura.cm16rar.mongodb.net/alura-node");

let db = mongoose.connection;

export default db;