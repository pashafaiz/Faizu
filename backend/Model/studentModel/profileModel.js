const mongoose = require('mongoose');

const profile = new mongoose.Schema({
    FirstName:{type:String},
    LastName:{type:String},
    Email:{type:String},
    Gender:{type:String},
    Images:{type:String},  

 
});

module.exports = mongoose.model('profile',profile);