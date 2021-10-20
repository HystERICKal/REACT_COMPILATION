//Create router
const router = require("express").Router();

//Add user model
const User = require("../models/User");

router.get("/register", async (req,res)=>{
    // // res.send("hey its auth route")
    // const user = await new User({
    //     username: "john",
    //     email: "john@gmail.com",
    //     password: "123456"
    // })

    // await user.save()
    // res.send("ok")

    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    });

    try{
        const user = await newUser.save();
        res.status(200).json(user);
    } catch (err) {
        console.log(err);
    }
});


//to use it in another file
module.exports = router