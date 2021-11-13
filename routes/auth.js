const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require('bcrypt');//for hashing passwords

//REGISTER
//POST -> localhost:5000/api/auth/register
///////////////////////////////////////////////////////////////////////////////////////////////////////
//If creating something, use "post" method
//If updating existing model, use "put" method
//If deleting a model, use "delete" method
//If fetching some data and arent gonna change anything, you can use "get" method

router.post("/register",async (req, res)=>{
    //request - what we are sending to the server
    //         -When user is created, we can send email, username, password
    //response -After the whole process, a response will be returned, it can be 
    //         -a user, a warning or any string you want

    //If using async function always use try and catch function

    try{
        const salt = await bcrypt.genSalt(10)
        const hashedPass = await bcrypt.hash(req.body.password, salt)
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPass,
        })

        //save user
        const user = await newUser.save()
        //If everything is succssesful
        res.status(200).json(user);

    } catch(err){//if process fails
        res.status(500).json(err)//500 means something went wrong
    }
})


//LOGIN

//POST -> localhost:5000/api/auth/login

/////////////////////////////////////////////////////////////////////////////////////////////////////
router.post("/login", async(req,res)=>{
    try{
        //find user that has been entered on login form in mongoDB
        const user = await User.findOne({username: req.body.username})
        //if user not found then...
        !user && res.status(400).json("Wrong credentials!!")

        //Compare if password entered is same as hashed password that is present in MongoDB
        //user.password is the hashed password in mongoDB
        //req.body.password is the password enetred by user on the login form
        const validated = await bcrypt.compare(req.body.password, user.password)
        //if password is wrong then...
        !validated && res.status(400).json("Wrong credentials!!")

        //if everything is ok, then send user
        //To send everything excluding password...
        const{password, ...others} = user._doc;
        res.status(200).json(others)

    }catch(err){
        res.status(500).json(err);
    }
})

module.exports = router;
