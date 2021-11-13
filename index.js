const express = require("express");
const app = express();
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const authRoute = require("./routes/auth")
const userRoute = require("./routes/users")
const postRoute = require("./routes/posts")
const categoryRoute = require("./routes/categories")
const multer = require("multer")

dotenv.config();
//enable to send JSON object inside body
app.use(express.json());

mongoose
    .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // usecreateIndex: true

    })
    .then(console.log("Connected to MongoDB"))
    .catch((err) => console.log(err));

    
// app.use("/",(req,res)=>{
//     console.log("Main URL")
// });

const storage = multer.diskStorage({
    //cb = call back function (takes care of errors)
    destination:(req, file, cb) =>{
        cb(null, "images")
    },filename:(req,file,cb) =>{
        //send this filename to react application (client side)
        cb(null,req.body.name)
    }
})

//upload file
//POST -> localhost:5000/api/upload
const upload = multer({storage:storage})
app.post("/api/upload", upload.single("file"),(req,res) =>{
    res.status(200).json("file has been uploaded!")
})


app.use("/api/auth", authRoute)
app.use("/api/users/", userRoute)
app.use("/api/posts/", postRoute)
app.use("/api/categories/", categoryRoute)

app.listen("5000", () => {
    console.log("Backend is running")
})