const express= require('express');
// const { model } = require('mongoose')
// const {protect} = require('../middleware/authMiddleware')
const Router = express.Router();
Router.use(express.json())
const { country, allcountry,countrypost} = require('../../controllers/studentControllers/studentCountryController');



Router.get('/',country)
Router.post('/',allcountry)
Router.post('/search',countrypost)
// Router.put('/updateproduct/:_id',protect,updateproduct)
// Router.delete('/deleteproduct/:_id',protect,deleteproduct)


module.exports = Router