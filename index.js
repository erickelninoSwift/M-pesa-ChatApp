const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const path = require("path");
const cookieParser = require("cookie-parser");
const createError = require("http-errors");

const inboxRouter = require("./router/inboxRouter");
const loginRouter = require("./router/loginRouter");
const userRouter = require("./router/userRouter");
const decorateHTML = require("./middlewares/common/decorateHtml");

// const controllerLogin = require("./controllers/loginController");
// const controllerUser = require("./controllers/userController");

const {
  notFoundHandler,
  customError,
} = require("./middlewares/common/errorHandler");

dotenv.config();
const app = express();

const PORT = process.env.PORT;

// Database Connection

mongoose
  .connect(process.env.MONGO_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database Connection Successful");
  })
  .catch((err) => {
    console.log(err.message);
  });

//

// Cookie parser

// Routing

// Request Parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// set Views engin
app.set("views", "views");
app.set("view engine", "ejs");

//  static folder
app.use(express.static(path.join(__dirname, "public")));

// ============================

// parse cookies
app.use(cookieParser(process.env.COOKIE_SECRET));
// ==================

//  Routign setup
app.use("/", loginRouter);
app.use("/inbox", inboxRouter);
app.use("/users", userRouter);

//  Error handling 404 not found handler

app.use(decorateHTML("Error 404 page"), notFoundHandler);
app.use(decorateHTML("Custom Error page"), customError);

app.listen(PORT, () => {
  console.log(`The app is running on PORT: ${PORT}`);
});
