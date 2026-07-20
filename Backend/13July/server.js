const express = require("express");
const fs = require("fs");
require("dotenv").config();
const { arr } = require("./storage/storage");
const connectDB = require("./db");

const app = express();

connectDB();

const authRouter = require("./router/auth.route");
const connectDb = require("./DB/mongo.db");
const userRouter = require("./router/user.route");
const errorHandler = require("./middlewares/errror.middleware");
const authMiddleware = require("./middlewares/auth.middleware");



app.use(express.json());




app.use("/auth", authRouter);
app.use("/user", authMiddleware, userRouter);

app.use(errorHandler);

console.log(connectDb)

connectDb()
  .then(() => {
    console.log("DB CONNECTED");
  })
  .then(() => {
    app.listen(process.env.PORT || 8080, () => {
      console.log(`PORT STARTED ON ${process.env.PORT || 8080}`);
    });
  })
  .catch((err) => {
    console.log(err);
  })