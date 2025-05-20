import mongoose from "mongoose"

const connectDB = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            user: process.env.MONGO_USER, // Ensure these environment variables are set
            pass: process.env.MONGO_PASS
        })
        console.log("MongoDb connected");
        
    } catch (error) {
    console.error("MongoDB connection failed: Authentication failed", error)
     process.exit(1) 
    }
}

export default connectDB;
