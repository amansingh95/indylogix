const mongoose = require('mongoose');

const vDetail = mongoose.Schema({
    title:{
        type:string,
        required: true,
    },
    desc:{
        type:string,
    },
    categori:{
        type:string,
    },
},{
    timestamp:true,
})
const vDetail = mongoose.model('vDetail',vDetail)
export default vDetail