import * as authService from '../services/authService.js';

export const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({ message: "Please provide all required fields" })
        }

        const userDate = await authService.registerUser({ name, email, password });
        res.status(201).json(userDate);
        console.log("User registered successfully:", userDate);

    } catch (error) {
        console.error("Register Error:", error.message);

        const statusCode = error.message === "User already exists" || error.message === "Invalid user data" ? 400 : 500;

        res.status(statusCode).json({ message: error.message || "Server error during registration" });
    }
};

export const login = async (req, res) => {

    try {

        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "Please provide email and password" });
        }

        const userData = await authService.loginUser({ email, password });
        res.status(200).json(userData);
        console.log("User logged in successfully:", userData);

    } catch (error) {
        console.error("Login Error:", error.message);

        const statusCode = error.message === "Invalid email or password" ? 401 : 500;
        res.status(statusCode).json({ message: error.message || "Server error during login" });
    }


}
