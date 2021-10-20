//Create router
const router = require("express").Router();

router.get("/",(req,res)=>{
    res.send("hey its user route")
})


//to use it in another file
module.exports = router