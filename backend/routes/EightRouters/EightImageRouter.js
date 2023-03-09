const express= require('express');
const { getEightImage,} = require('../../controllers/imageController/EightDataControllers');
const  { getSixImage,getSliderImage } = require('../../controllers/imageController/sixDataController')
const { getTwelveImage } = require('../../controllers/imageController/twelveDataController')
const Router = express.Router();
Router.use(express.json())

Router.get ('/eight',getEightImage)
Router.get ('/six',getSixImage)
Router.get ('/slider',getSliderImage)
Router.get ('/twelve',getTwelveImage)



module.exports = Router
