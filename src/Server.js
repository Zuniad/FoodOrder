const express= require("express")
const axios= require("axios")
const cors= require("cors")
const { configDotenv } = require("dotenv")
const app= express()

const {dbConnection}= require("./config/dbConnection")

const { errorMiddleware } = require("./error/error")

const ReservationRouter= require("./routes/reservationRoute")


app.use(cors(
    {
        origin:[process.env.FRONTEND_URL],
        methods:["GET","POST","PUT","DELETE"],
        credentials:true
    }
))

app.use(express.json())
app.use(express.urlencoded({extended:true}))

configDotenv()

app.use("/api/v1/reservation",ReservationRouter);



const port= process.env.PORT || 4000

dbConnection()


app.use(errorMiddleware);

app.listen(port,()=>{
    console.log("App is Listening on port",port)
})





