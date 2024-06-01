import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';

const signup = async (req, res) => {
    const { userName, email, password } = req.body;

    // Validate that all fields are present
    if (!userName || !email || !password) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    // Hash the password 
    const hashedPassword = bcryptjs.hashSync(password, 10);

    // Create a new user
    const newUser = new User({ userName, email, password: hashedPassword });

    try {
        // Save the user to the database
        await newUser.save();
        console.log(userName, email, password);
        res.status(201).json({ message: 'User is saved successfully' });
    } catch (error) {
        // Handle errors, such as duplicate email
        console.error('Error saving user:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

export default signup;
