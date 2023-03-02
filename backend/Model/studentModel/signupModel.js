const mongoose = require('mongoose');
const signup = new mongoose.Schema({



    FirstName:{
        type:String
    },
    LastName:{
    type:String
},
    Email:{
    type:String
},
    Number:{
    type:Number
},
    Gender:{
    type:String
},

    Password:{
    type:String
}

});

module.exports = mongoose.model('Sign-up',signup)