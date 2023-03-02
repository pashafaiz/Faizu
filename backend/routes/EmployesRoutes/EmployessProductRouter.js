const express= require('express');
const Router = express.Router();
Router.use(express.json())

const { getproduct, addProduct, updateproduct, deleteproduct } = require("../../controllers/EmployesController/EmployesProduct");



Router.get('/getproduct',getproduct)
Router.post('/insertproduct',addProduct)
Router.put('/updateproduct/:_id',updateproduct)
Router.delete('/deleteproduct/:_id',deleteproduct)


module.exports = Router;