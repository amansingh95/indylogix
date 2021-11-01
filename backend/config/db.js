const mongoose = require('mongoose');

const connectDB = async()=>{
    try{
        const conn = await mongoose.connect("mongodb+srv://aman123:Aman1995@devconnector.fhcwf.mongodb.net/FirstDB?retryWrites=true&w=majority",{
            useUnifiedTopology:true,
            useNewUrlParser:true,
        })
       console.log(`MongoDB Connected:`)
    }catch(error){
        console.log("error in connection db",error)
        process.exit(1)
    }
}
module.exports = connectDB