const express = require("express");
const router = express.Router();
const User = require("../models/User");

//Create a user using: POST "/api/auth" . Doesn't require auth

router.post("/", (req, res) => {
  const user = User(req.body); //assigning whatever body has been recived as request to user const.
  user.save(); //to save data in the db
  console.log(req.body);
  res.send(req.body);
});

module.exports = router;
