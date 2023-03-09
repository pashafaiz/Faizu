const express= require('express');
const Router = express.Router();
Router.use(express.json())
const { addProduct, getProduct, updateproducts, deleteproducts,  } = require('../../controllers/ProductControllers/productsControllers');



Router.get('/',getProduct)
Router.post('/',addProduct)
Router.put('/:_id',updateproducts)
Router.delete('/:_id',deleteproducts)

module.exports = Router