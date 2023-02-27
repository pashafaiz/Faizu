const mongoose = require('mongoose');
const studentcountry = new mongoose.Schema({
    countryCode:{
        type:String
    },
    countryName:{
    type:String
},
    countrySchools:{
    type:String
}
});

module.exports = mongoose.model('studentCountry',studentcountry)