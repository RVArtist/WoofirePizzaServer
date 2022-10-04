import express from "express";
import user from "../models/userModel.js";

const router = express.Router();

router.post("/register", (req, res) => {
  const {name , email , password} = req.body;
  const newUser = new user({name, email, password})

  try{
    newUser.save()
    res.send('User Registration Successful')
  } catch (error){
    return res.status(400).json({message: error})
  }
})

export default router;
