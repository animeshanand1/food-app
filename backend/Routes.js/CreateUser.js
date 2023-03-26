const express = require("express");
const { body, validationResult } = require("express-validator");
const jwt=require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const jwtSecret='thisisanexample2'

const router = express.Router();
const User = require("../models/User");

router.post(
  "/createuser",
  body("email", "invalid email").isEmail(),
  body("name", "too short").isLength({ min: 4 }),
  body(
    "password",
    "Password length should be of minimum 5 characters"
  ).isLength({ min: 5 }),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const salt=await bcrypt.genSalt(10)
    const secPassword=await bcrypt.hash(req.body.password,salt)
    try {
      await User.create({
        name: req.body.name,
        password: secPassword,
        email: req.body.email,
        location: req.body.location,
      });
      res.json({ success: true });
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  }
);
router.post(
  "/loginuser",
  body("email", "invalid email").isEmail(),

  body(
    "password",
    "Password length should be of minimum 5 characters"
  ).isLength({ min: 5 }),

  async (req, res) => {
    let email = req.body.email;
    const errors = validationResult(req);
    try {
      let userData = await User.findOne({ email });
      if (!userData) {
        return res
          .status(400)
          .json({ errors: "Try logging using valid email ID" });
      }
      const comparePSWD=await bcrypt.compare(req.body.password,userData.password)
      if ( req.body.password!== userData.password) {
        return res.status(400).json({ errors: "Incorrect Password" });
      }
      return res.json({ success: true });
      const data={
        User:{
          email:userData.email                        //code not reachable error
        }
      }
      const authToken=jwt.sign(data,jwtSecret) 
      return res.json({success:true,authToken:authToken})
    } 
    catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  }
);

module.exports = router;
