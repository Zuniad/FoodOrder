const ErrorHandler = require("../error/error")

const Reservation = require("../model/reservationSchema.js")


const sendReservation = async(req,res,next)=>{
    const {firstName,lastName,email,phone,date,time}= req.body
    if(!firstName || !lastName || !email || !phone || !date || !time)
    {
        return next(new ErrorHandler("All fields are required",400))
        
    }

    try{
        const reservation = await Reservation.create({
            firstName,
            lastName,
            email,
            phone,
            date,
            time
        })

        res.status(200).json({
            success:true,
            message:"Reservation sent successfully",
            data:reservation
        })


    }

    catch(error)
    {
        if(error.name==="ValidationError")
        {
            const validationErrors= Object.values(error.errors).map(val=>val.message)
            return res.status(400).json({
                success:false,
                message:validationErrors})  
        }

    }     
}


const getReservations= async(req,res,next)=>{
    try{
        const reservations = await Reservation.find();


        if(!reservations)
        {
            return res.status(404).json(
                {
                    success:false,
                    message:"No Reservations Found"
                }
            )
        }

        res.status(200).json({
            success:true,
            data:reservations
        })


    }
    catch(error)
    {
        console.log("error Occured");
        return res.json(
            {
                success:false,
                message:"Error Occured"
            }
        )
    }
}




const deleteReservation= async(req,res)=>{
    try{
        const{id}= req.params;
        const reservation = await Reservation.findByIdAndDelete(id);
        if(!reservation)
        {
            return res.status(404).json(
                {
                    success:false,
                    message:"Reservation Not Found"
                })
        }
        return res.status(200).json(
            {
                success:true,
                message:"Reservation Deleted Successfully"
            }
        )

    }

    catch(error)
    {
        console.log("Error ")
        return res.status(400).json(
            {
                success:false,
                message:"Error Occured"
            }
        )
    }

}



module.exports={sendReservation,getReservations,deleteReservation};