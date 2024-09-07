import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://Saurabh:Saurabh@saurabh.27tpt.mongodb.net/').then(()=>{
       console.log('DB connected') ;
    })
}