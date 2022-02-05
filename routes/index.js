//Importaciones
const express =     require("express")
const router=       express.Router()



//Ruteo
router.get("/", (req,res)=> {
    res.send("Hola mundo")
})




//Exportaciones
module.exports = router