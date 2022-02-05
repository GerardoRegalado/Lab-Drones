// importacion 
const mongoose = require("mongoose")


// funcion
const connectDB = async () => {

    try{

        await mongoose.connect(process.env.MONGODB_URI, {
           useNewUrlParser:true,
            useUnifiedTopology: true
        })

        return console.log ("base de datos conectada correctamente")

    } 
    
    catch (error) {

        console.log(error)
        process.exit(1)
    }


}


//exportacion
module.exports = connectDB