import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type:String , 
        required:true
    },
    title:{
        type:String , 
        required:true
    },
    description :
     {
         type : String , 
         required:true
    },
    category: {
        type: String,
        required: true,
        
    },
    priority: {
        type: String,
        required: true,     
    },
    status: {
        type: String,
        required: true,
    },
    hostelName: {
        type: String,
        required: true
    },
   roomNumber: {
        type: String,
        required: true
    },
    

})

const productModel= mongoose.models.product || mongoose.model("product" , productSchema)

export default productModel 
