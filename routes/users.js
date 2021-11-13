const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");
const bcrypt = require('bcrypt');//for hashing updated passwords


//UPDATE

//PUT -> localhost:5000/api/users/61834ab9da65593fdbee0651

///////////////////////////////////////////////////////////////////////////////////////////////////////
//If creating something, use "post" method
//If updating existing model, use "put" method
//If deleting a model, use "delete" method
//If fetching some data and arent gonna change anything, you can use "get" method

router.put("/:id",async (req, res)=>{
    //request - what we are sending to the server
    //         -When user is created, we can send email, username, password
    //response -After the whole process, a response will be returned, it can be 
    //         -a user, a warning or any string you want

    //If using async function always use try and catch function

    //Use user id to find user so he/she can be updated
    
        if(req.body.userId === req.params.id){
            //update and hash password again
            if(req.body.password){
                const salt = await bcrypt.genSalt(10)
                req.body.password = await bcrypt.hash(req.body.password, salt)
            }
            try{
                const updatedUser = await User.findByIdAndUpdate(req.params.id, {
                    $set: req.body,
                },
                {new:true})
                res.status(200).json(updatedUser)

            } catch(err){//if process fails
                res.status(500).json(err)//500 means something went wrong
            }
        }else{
            res.status(401).json("You can only update your account!...")
        }
    
})

//DELETE

//DELETE -> localhost:5000/api/users/61834ab9da65593fdbee0651

///////////////////////////////////////////////////////////////////////////////////////////////////////
//If creating something, use "post" method
//If updating existing model, use "put" method
//If deleting a model, use "delete" method
//If fetching some data and arent gonna change anything, you can use "get" method

router.delete("/:id",async (req, res)=>{
    //request - what we are sending to the server
    //         -When user is created, we can send email, username, password
    //response -After the whole process, a response will be returned, it can be 
    //         -a user, a warning or any string you want

    //If using async function always use try and catch function

    //Use user id to find user so he/she can be updated
    
        if(req.body.userId === req.params.id){
            try{
                const user = await User.findById(req.params.id)
                try{
                    await Post.deleteMany({ username: user.username})
                    await User.findByIdAndDelete(req.params.id)
                    res.status(200).json("User has been deleted...")

    
                } catch(err){//if process fails
                    res.status(500).json(err)//500 means something went wrong
                }
            }catch(err){
                res.status(404).json("User not found!")
            }
            
        }else{
            res.status(401).json("You can only update your account!...")
        }
    
})

//GET USER
//GET -> localhost:5000/api/users/61834ab9da65593fdbee0651
router.get("/:id", async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      //fetch everything but password 
      const { password, ...others } = user._doc;
      res.status(200).json(others);
    } catch (err) {
      res.status(500).json(err);
    }
  });




module.exports = router;
