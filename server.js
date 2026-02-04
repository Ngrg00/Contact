const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const connectDB = require("./dbConnection/dbConnection.js");
const dotenv = require("dotenv").config();

connectDB();

const app = express();


app.use(express.json());
app.use('/', require("./routes/contactRoutes.js"))
app.use(errorHandler);

app.get('/', (req, res) => {
    res.send("API is running.");
}); 


const port = process.env.PORT || 1000;

app.listen(port, () => {
    console.log(`SERVER RUNNING ON PORT ${port}`); 
});