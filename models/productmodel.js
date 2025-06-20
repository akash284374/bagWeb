const mongoose=require('mongoose')

const productSchema=mongoose.Schema({
product:String,
image:String,
name:String,
price:Number,
discount:{
    type:Number,
    default:0
},
bgcolour:String,
pannelcolor:String,
textcolor:String
})

module.exports=mongoose.model("product",productSchema)