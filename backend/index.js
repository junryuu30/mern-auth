import express from "express"
import db from "./config/Database.js"
import router from "./routes/index.js"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import cors from "cors"

dotenv.config()
const app = express();
const PORT = 5000

try {
     await db.authenticate();
     console.log('database connected..');
} catch (error) {
     console.log(error);
     
}
// for change refresh token to cookie
app.use(cookieParser())
// for api can acsess on outside / domain can acsess
app.use(cors({credentials: true, origin:"http://localhost:3000"}))
app.use(express.json())
app.use(router)

app.listen(PORT, ()=> console.log(`server running at port ${PORT}`))