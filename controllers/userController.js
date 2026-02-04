const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken"); 

const User = require("../models/userModel.js");

const register = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;

    if(!name || !email || !password) {
        res.status(400);

        throw new Error("All fields are required!"); 
    }

    const userExist = await User.findOne({ email: email });

    if(userExist) {
        res.status(400);

        throw new Error("User already exist!");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
        name,
        email,
        password: hashedPassword
    });

    if(user) {
        res.status(200).json({ id: user.id, email: email });
    } else {
        res.status(400);

        throw new Error("User data not valid.");
    }
});

const login = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    if(!email || !password) {
        res.status(400);

        throw new Error("All fields are required.");
    }

    const user = await User.findOne({ email });

    if(user && (await bcrypt.compare(password, user.password))) {
        const accessToken = jwt.sign({
            user: {
                name: user.name,
                email: user.email,
                id: user.id
            }
        }, process.env.ACCESS_TOKEN, { expiresIn: "1m"});

        res.status(200).json({ accessToken });
    } else { 
        res.status(400);

        throw new Error("Email or password not valid.");
    }
});

const current = asyncHandler(async (req, res) => {
    res.json(req.user);
});

module.exports = { register, login, current }