const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            require: false,
            min: 3,
            max: 20,
            unique: true,
        },

        email: {
            type: String,
            required: false,
            max: 50,
            unique: true,
        },

        password: {
            type:String,
            required: false,
            min: 6,
        },

        profilePicture: {
            type: String,
            default: "",
        },

        coverPicture: {
            type: String,
            //When user creates account, cover pic should be blank
            default: "",
        },

        followers: {
            type: Array,
            default: [],
        },

        followings: {
            type: Array,
            default: [],
        },

        isAdmin: {
            type: Boolean,
            default: false,
        },

//Automatically update timestamp for whenever a new user is created or an update is made
    
    },

    {timestamps: true}

);

module.exports = mongoose.model("User", UserSchema)