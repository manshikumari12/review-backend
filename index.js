const express =require("express")
const {connectDB}=require("./db")
const {reviewRouter}=require("./router/review.router")
const app =express()
const  cors =require("cors")
app.use(cors())
app.use(express.json())

app.use("/review",reviewRouter)


app.get("/", (req, res) => {
    res.send("Home Page");
  });

app.listen("1111",async()=>{
    try {
        await connectDB
        console.log("connected to Data-base")
        
    } catch (error) {
       console.log(error); 
    }
    console.log(`server is running on the port 1111`)
})