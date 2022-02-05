//Importacion

const mongoose = require("mongoose")


//Schema


const droneSchema = mongoose.Schema ({

    name : {
        type:       String,
        required:   true
    },

    propellers: {
        type:       Number,
        required:   true
    },

    maxSpeed: {
        type:       Number,
        required:   true

    }


})


//Modelo
const Drone = mongoose.model("Drone", droneSchema)

//Exportacion
module.exports = Drone