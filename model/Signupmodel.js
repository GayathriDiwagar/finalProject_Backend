const mongoose=require('mongoose');

// since we use in new page other than server.js, we use mongoose.Schema
const signUpTemplate =new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    contact:{
        type:String,
        required:true
    },
    age:{
        type:String,
        required:true
    },
    jobRole:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})

module.exports=mongoose.model('sampletables',signUpTemplate);