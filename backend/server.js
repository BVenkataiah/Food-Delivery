import express from "express"
import cors from "cors"
import connectDB from "./config/db.js";
import 'dotenv/config'
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";



// app config
const app = express()
const port = process.env.PORT || 4000;

// db connection
await connectDB()



// middleware
app.use(express.urlencoded({extended:false}));
app.use(express.json())
app.use(cors())

//api endpoints
app.use("/api/food", foodRouter)
app.use("/images", express.static('uploads'))
app.use("/api/user",userRouter)
app.use("/api/cart", cartRouter)
app.use("/api/order",orderRouter)

app.get("/",(req,res)=>{
    res.send("API Working")
})

app.listen(port, () => {
    console.log(`server listening on port ${port}`)   
})