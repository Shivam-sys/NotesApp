const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
var fetchuser = require("../middleware/fetchuser");

const JWT_SECRET = process.env.JWT_SECRET; //for JWT purpose, enables secure communication between client and server

// ROUTE1: Create a user using: POST "/api/auth/createuser" . No login required

router.post(
  "/createuser",
  [
    body("name", "Name must be 3 chars long").isLength({ min: 3 }),
    body("email", "Enter valid email").isEmail(),
    body("password", "Password must be 5 chars long").isLength({ min: 5 }),
  ],
  async (req, res) => {
    //if errors are there in validating req, return bad request and errors.
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
      //@ return res.send("Error occured");
    }
    //wrap everything in a try catch for any kind of unforeseen error.
    try {
      // Check wether a user with same email exist or not.
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res
          .status(400)
          .json({ error: "User with same email already exist." });
      }
      //if no such email exist already then create a new user
      const salt = await bcrypt.genSalt(10); //generating salt
      const secPass = await bcrypt.hash(req.body.password, salt); //using await because it returns a promise.
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass,
      });
      const data = {
        user: {
          id: user.id,
        },
      };
      const authToken = jwt.sign(data, JWT_SECRET);
      res.json({ message: "User successfully created!", authToken });
    } catch (error) {
      console.error(error.message);
      res.status(500).json({error:"Some unforeseen error occured"});
    }
    // .then((user) => res.json(user))
    // .catch((err) => {
    //   console.log(err),
    //     res.json({
    //       error: "Some error occured!",
    //       message: err.keyValue,
    //     });
    // });

    // {const user = User(req.body); //assigning whatever body has been recived as request to user const.
    // user.save(); //to save data in the db
    // console.log(req.body);} #->remove outer {}
    // res.send(req.body); //if res.json is already done then no need to use res.send
  }
);

//ROUTE 2: authenticate a user using: POST "/api/auth/login .. no login required

router.post(
  "/login",
  [
    body("email", "Enter valid email").isEmail(),
    body("password", "Password cannot be blank").exists(),
  ],
  async (req, res) => {
    //if errors are there in validating req, return bad request and errors.
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (!user) {
        return res
          .status(400)
          .json({ error: "Login with correct credentials" });
      }
      const passwordCompare = await bcrypt.compare(password, user.password);
      if (!passwordCompare) {
        return res
          .status(400)
          .json({ error: "Login with correct credentials" });
      }
      const payload = {
        user: {
          id: user.id,
        },
      };
      const authToken = jwt.sign(payload, JWT_SECRET);
      res.json({ message: "Logged In!", authToken });
    } catch (error) {
      console.error(error.message);
      res
        .status(500)
        .json({error:"Some internal server error occured while logging in"});
    }
  }
);

//ROUTE 3: Get logged in user details using POST "/api/auth/getuser", login required
router.post("/getuser", fetchuser, async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await User.findById(userId).select("-password");
    res.send(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({error:"Can't get user data. server internal error"});
  }
});

module.exports = router;
