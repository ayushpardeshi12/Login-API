const User = require("../models/userModel");
const bcrypt = require("bcrypt");

async function getUserSignUp(req, res) {
  const { firstname, lastname, username, email, password } = req.body;
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  if (password.length > 5) {
    const user = await User.create({
      firstname: firstname,
      lastname: lastname,
      username: username,
      email: email,
      password: hashedPassword,
    });
  } else {
    return res.json({
      error: "Password Length Must Be Greater Than 5 Characters",
    });
  }
  return res.status(200).render("home");
}
async function getUserSignIn(req, res) {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).send("User Not Found");
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch) {
      return res.status(401).send("Invalid Password");
    }

    return res.status(200).render("home");
  } catch (error) {
    res.status(500).send("Server error");
  }
}

module.exports = { getUserSignUp, getUserSignIn };
