require("dotenv").config();
const express = require("express")
const userRoutes = require("./route/userRoutes")
const app = express();
const connectToDb = require("./config/db")


app.use(express.json())
app.use(express.urlencoded({extended:true}))

connectToDb();

app.use("/", userRoutes);


module.exports = app;
