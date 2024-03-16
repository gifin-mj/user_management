var express=require('express')

var cors=require('cors')
var cookieparser=require('cookie-parser')
require('dotenv').config()

var userRouter=require('./Server/Routes/userRouter')
var connectDB=require('./Server/Database/database')

const app=express()
connectDB.connectDB()

app.use('/user',userRouter)
app.use(cors())
app.use(express.json())
app.use(cookieparser())

let PORT=process.env.PORT

app.listen(PORT,()=>{
    console.log(`running @ ${PORT}`);
})