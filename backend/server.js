import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import userRouter from './routes/userRoute.js'
import complaintRouter from './routes/complaintRoute.js'   // ✅ NEW
//import complaintRouter from './routes/complaintRoute.js';


const app=express()
const port = process.env.PORT || 4000
connectDB()
connectCloudinary()

app.use(express.json())
app.use(cors())

app.use('/api/user' , userRouter)
app.use('/api/complaints', complaintRouter)  // ✅ NEW




app.get('/',(req,res)=>{
    res.send("API is working yayy!")
})

app.listen(port, ()=> console.log('Server started on port no :' + port  ))
