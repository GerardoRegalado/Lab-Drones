//Importaciones
const express =     require("express")
const connectDB = require("./config/db")
const app =         express()



//Middlewares
require("dotenv").config()

connectDB()



app.use(express.static("public"))
app.set("views",__dirname + "/views")
app.set("view engine", "hbs")



//rutas
app.use("/drones", require ("./routes/drones"))
app.use("/", require ("./routes/index"))







//servidores
app.listen(process.env.PORT, () => {
    console.log(`servidor activo en puerto ${process.env.PORT}`)
} )



