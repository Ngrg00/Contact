const express = require("express");
const errorHandler = require("./middleware/errorHandler.js");
const connectDB = require("./dbConnection/dbConnection.js");
const dotenv = require("dotenv").config();

connectDB();

const app = express();

app.use(express.json());
app.use('/contacts', require("./routes/contactRoutes.js"));
app.use('/users', require("./routes/userRoutes.js"));
app.use(errorHandler);

const port = process.env.PORT || 1000;

app.listen(port, () => {
    console.log(`SERVER RUNNING ON PORT ${port}`); 
});