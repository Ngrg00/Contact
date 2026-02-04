const express = require("express");
const validateToken = require("../middleware/validateToken.js");
const router = express.Router();

const {
    register,
    login,
    current
} = require("../controllers/userController.js");


router.post("/register", register);
router.post("/login", login);
router.get("/current", validateToken ,current);

module.exports = router;