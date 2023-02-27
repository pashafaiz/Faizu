const mongoose = require('mongoose');
const studentSchema = new mongoose.Schema({

       Subject: {
        type:String,
        required:[true,'Invalid subject']
       },
    });


    module.exports = mongoose.model('studentSubject',studentSchema);