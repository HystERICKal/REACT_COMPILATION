const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    }

}, { timestamps: true });//Creates updated at and created at timestamps

module.exports = mongoose.model("Category", CategorySchema)
