import mongoose from "mongoose";

mongoose.connect(process.env.STRING_DB_CONNECT);

const db = mongoose.connection;

export default db;