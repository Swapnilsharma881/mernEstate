import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

const signup = async (req, res) => {
  console.log(req.body);
  const { userName, email, password } = req.body;

  // Validate that all fields are present
  if (!userName || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  // Hash the password
  const hashedPassword = bcryptjs.hashSync(password, 10);

  // Create a new user
  const newUser = new User({ userName, email, password: hashedPassword });

  try {
    // Save the user to the database
    await newUser.save();
    console.log(userName, email, password);
    res
    .status(201)
    .json({ message: "User is saved successfully" });
  } 
  catch (error) {
    // Handle errors, such as duplicate email
    const message = error.message;
    console.error("Error saving user:", error.message);
    res
    .status(500)
    .json({ message, });
  }
};

export default signup;







export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const validUser = await User.findOne({ email }); //returns user object
    console.log(validUser);
    if (!validUser)
      return next(
        errorHandler(404, "Oh! Snap, You are not in our database...")
      );

    const validPassword = bcryptjs.compareSync(password, validUser.password); //only returns boolean
    console.log(validPassword);
    if (!validPassword)
      return next(errorHandler(401, "Oh y god, you forgot yur password..."));
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
    const { password : pass, ...userWithoutPassword } = validUser._doc;

    res
      .cookie("access token", token, { httpOnly: true, secure: true })
      .status(200)
      .json(userWithoutPassword);
    console.log("Congrats You Are In.");
  } catch (error) {
    next(error);
  }
};
