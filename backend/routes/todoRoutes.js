const express = require('express');
const router = express.Router();
const {protect} = require('../middleware/authMiddleware')
router.use(express.json());
const  { registeruser, loginuser,getMe,updateuser,deleteuser} = require('../controllers/todoControllers')
router.post('/',registeruser);
router.post('/login',loginuser)
router.get('/me', protect,getMe)
router.put('/',updateuser)
router.delete('/',deleteuser)




module.exports = router;