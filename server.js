const express = require("express");
const dotenv = require("dotenv");

const app = express();

//LOAD env vars
dotenv.config({path: "./config/cong.env"});

const PORT = process.env.PORT || 27324




app.listen(PORT, () => {
console.log(`Server runing in ${process.env.NODE_ENV} monde on http://localhost:${PORT}`)
})