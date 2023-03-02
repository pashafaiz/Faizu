const mongoose = require('mongoose');
const Employesproduct = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please add a title']
    },
    dis: {
        type: String,
        required: [true, 'Please add a discription']
    },
    price: {
        type: Number,
        required: [true, 'Please add a price']
    },
    reting: {
        type: String,

    },
    color: {
        type: String
    },
    img: {
        type: String
    },
    size:{
      type:String
    },
    quentity:{
        type:String
      }
}, 

);

module.exports = mongoose.model('Product1', Employesproduct);