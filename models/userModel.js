const mongoose = require("mongoose");

const userModel = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter a user name."],
        },

        email: {
            type: String,
            required: [true, "Please enter an email."],
            unique: [true, "Email already exist."]
        }, 

        password: {
            type: String,
            required: [true, "Please enter a password."]
        }
    }, 

    {
        timestamp: true
    }
);

module.exports = mongoose.model("User", userModel);