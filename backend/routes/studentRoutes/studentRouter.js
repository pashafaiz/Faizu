const express= require('express');
// const { model } = require('mongoose')
// const {protect} = require('../middleware/authMiddleware')
const Router = express.Router();
Router.use(express.json())
const { getstudent, addproduct} = require('../../controllers/studentControllers/studentController');



Router.get('/getproduct',getstudent)
Router.post('/addproduct',addproduct)
// Router.put('/updateproduct/:_id',protect,updateproduct)
// Router.delete('/deleteproduct/:_id',protect,deleteproduct)


module.exports = Router