const Drone= require("./../model/drone.model")

exports.getDrones = async (req,res) => {

    try{

    const foundDrones = await Drone.find({})

    console.log(foundDrones)

    res.render("drones/list", {data: foundDrones})
    }
    catch(error){
        console.log(error)

    }

}


exports.createDrones = async (req,res) => {

    return res.render("drones/create")
}