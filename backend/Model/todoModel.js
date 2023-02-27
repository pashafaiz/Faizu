const mongoose = require('mongoose');
const studentSchema = new mongoose.Schema({

       Firstname: {
        type:String,
        required:[true,'Please add Firstname']
       },
       Lastname:{
        type:String,
        required:[true,'Please add lastname']
       },
       Email: {
        type:String,
        required:[true,'Please add email']
       },
       Phone: {
        type:Number,
        required:[true,'Please add a Number']
       },
       PinCode: {
        type:Number,
        required:[true,'Please add PinCode']
       },
       Addresh: {
        type:String,
        required:[true,'Please add your Addresh']
       },
       State: {
        type:String,
        required:[true,'Please add your State']
       },

    
       
    },{
        timestamps:true
    });
    
    module.exports = mongoose.model('todo',studentSchema);