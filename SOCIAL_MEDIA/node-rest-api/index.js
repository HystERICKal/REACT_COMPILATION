// Create express here
const express = require("express");

//Create application
const app = express();

const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");

//Routes
const userRoute = require("./routes/users")
const authRoute = require("./routes/auth")

//TO use dotenv type te below command and make sure you create a .env file
dotenv.config()

//COnnect to mongo db
mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true}, ()=>{
    console.log("Connected to MongoDB")
});

//middleware
app.use(express.json());
app.use(helmet());
//prints out on the console date, request type,  address, status and duration of request e.t.c
app.use(morgan("common"));


//Instead of using these, routes are the best way to go

// //homepage
// //req=request
// //res=response
// app.get("/",(req,res)=>{
//     res.send("Welcome to homepage")
// })

// //Userpage
// app.get("/users",(req,res)=>{
//     res.send("Welcome to userpage")
// })

////////////USE ROUTES
app.use("/api/users", userRoute)
app.use("/api/auth", authRoute)

//Run server
app.listen(8800,()=>{
    console.log("First backend server is running!")
})