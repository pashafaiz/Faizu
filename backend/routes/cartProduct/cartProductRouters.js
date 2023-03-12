const express= require('express');
const protect = require('../../middleware/CartMiddleware')

const { getaddcard, postaddcard, deletecard } = require("../../controllers/cartproduct/cartProductCotroller");
const router = express.Router();
router.use(express.json())


router.get('/get',protect,getaddcard);    
router.post('/add',protect,postaddcard);
router.delete('/:_id',deletecard)

module.exports = router;