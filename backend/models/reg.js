const mongoose = require('mongoose');

const reg = mongoose.Schema({
    email:{
        type:string,
        required: true,
    },
    password:{
        type:string,
    }
},{
    timestamp:true,
})
const reg = mongoose.model('reg',reg)
export default reg