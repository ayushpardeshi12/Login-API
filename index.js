const express = require("express");
const dbConnect = require("./db/connect");
const path = require("path");
const userRoute = require("./routes/userRoutes");
const app = express();
let PORT = 8000;

// database Connection
dbConnect;

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// views
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

// routes

app.get("/", (req, res) => {
  res.render("signup");
});

app.get("/signin", (req, res) => {
  res.render("signin");
});

app.get("/logout", (req, res) => {
  res.render("signin");
});

app.use("/", userRoute);
app.listen(PORT, () => {
  console.log(`Server Running at http://localhost:${PORT}`);
});
