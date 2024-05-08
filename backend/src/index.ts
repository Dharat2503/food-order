import express,{Request,Response} from "express"
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import myUserRoute from "./routes/MyUserRoute"

mongoose.connect(process.env.MONGODB_STRING as string)
.then(()=> console.log("MongoDB Connected"))
const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/my/user",myUserRoute)

app.get("/",(req:Request,res:Response)=>{
    res.send("Hello World")
})

app.listen( 3003,()=>{
    console.log(`Server is running in http://localhost:${ 3003}`)
})