const mongoose= require("mongoose")

const validator= require("validator")
const reservationSchema= new mongoose.Schema(
    {
        firstName:{
            type:String,
            required:true,
            trim:true,
            minLength:3,
            maxLength:20
        },
        lastName:{
            type:String,
            required:true,
            trim:true,
               minLength:3,
            maxLength:25
        },
        email:{
            type:String,
            required:true,
            unique:true,
            validate(value){
                if(!validator.isEmail(value)){
                    throw new Error("Invalid Email")
                }
            }
        },
        phone:{
            type:String,
            required:true,
            unique:true,
            minLength:10,
            maxLength:11,
        },
        time:{
            type:String,
            required:true,
            trim:true,
        },
        date:{
            type:String,
            required:true,
            trim:true,
        }

    }
)

module.exports= mongoose.model("Reservation",reservationSchema);

