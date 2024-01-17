//import mongoose
const mongoose = require('mongoose')

//create schema
const reviewSchema = new mongoose.Schema({
    username:{
        type:String,
        require:true,
        min:[4,`Must be atleast 4 character but got {VALUE}`]
    },
    rating:{
        type:String,
        require:true,
    },
    review:{
        type:String,        
        require:true,
        max:[200,`Must be atleast 200 character but got {VALUE}`]
    }
})

//create model
const review = mongoose.model("review",reviewSchema)

//export
module.exports = review