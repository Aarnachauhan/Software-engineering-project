import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { 
        type : String , 
        required: true
    },
    email : {
        type: String , 
        required:true,
        unique : true
    },
    studentPhone: {
        type: String,
        
    },
    password :{
        type: String ,
        required:true
    },
    Date :{
        type: Object , 
        default : {}
    }
}, {minimize : false})

const userModel = mongoose.user || mongoose.model('user', userSchema)

export default userModel