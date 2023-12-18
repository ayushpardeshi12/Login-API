const express = require("express");
const {
  getUserSignUp,
  getUserSignIn,
} = require("../controllers/userController");
const router = express.Router();

router.post("/signup", getUserSignUp);

router.post("/login", getUserSignIn);

module.exports = router;
