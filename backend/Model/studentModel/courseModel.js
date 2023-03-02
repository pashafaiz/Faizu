const mongoose = require('mongoose');
const studentCourse = new mongoose.Schema({
  Course:Object
});

       


    module.exports = mongoose.model('Course-Details',studentCourse);