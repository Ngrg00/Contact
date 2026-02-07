const mongoose = require("mongoose");

const contactModel = mongoose.Schema(
    {
        user_id: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "User"
        },
        
        name: {
            type: String,
            required: [true, "Please enter a contact name."]
        }, 

        email: {
            type: String,
            required: [true, "Please enter a contact email."]
        }, 

        phone: {
            type: Number,
            required: [true, "Please enter a contact number."],
            unique: [true, "Phone number already exist."]
        }, 
    }, 

    {
        timestamp: true
    }
);

module.exports = mongoose.model("Contact", contactModel);