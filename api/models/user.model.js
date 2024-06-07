import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    userName:{
        type :String,
        required:true,
        unique:true
    },
    email:{
        type :String,
        required:true,
        unique:true
    },
    password:{
        type :String,
        required:true,
    },
    avatar : {
        type : String,
        default : "https://marketplace.canva.com/EAFqNrAJpQs/1/0/1600w/canva-neutral-pink-modern-circle-shape-linkedin-profile-picture-WAhofEY5L1U.jpg",
    }
},{timestamps:true});

const User = mongoose.model('User', userSchema);


export default User;

