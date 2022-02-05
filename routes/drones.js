const express = require("express")
const router = express.Router()

const droneController = require("./../controllers/droneController")

//ver los libros
router.get("/", droneController.getDrones)

//para crear un nuevo drone

router.get("/create", droneController.createDrones)



module.exports = router