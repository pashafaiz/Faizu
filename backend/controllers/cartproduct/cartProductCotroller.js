const { route } = require('../../routes/cartProduct/cartProductRouters')
const jwt = require("jsonwebtoken")
const mongodb = require('mongodb');
const bcrypt = require('bcryptjs')
const addtocard = require('../../Model/cartProduct/cartProductModel');
const asyncHandler = require('express-async-handler');



const getaddcard =asyncHandler(async (req, res) => {
    let data = await addtocard.find({ user_id:req.user});
    
    if(!data.length){
        res .status(200).json({status:false,message:"cart is empty"})
    }


    console.log("======>", data);
    res.status(200).json(data)
})



const postaddcard =  asyncHandler(async (req, res) => {

    const { title, dis, price, reting,img,color,size, quentity } = req.body
    if (!title && !dis && !price && !reting && !img && !color && !size && !quentity ) {
        res.status(400).json({ message: "Please add all filds" })
    }
    let data = await addtocard.create({ 
        title,
        dis,
        img,
        price,
        reting,
        color,
        size,
        quentity,
        user_id:req.user
        
        });
    console.log("====>", data);
    res.status(200).json(data)
})



const deletecard = asyncHandler(async(req,res)=>{
    const findid = await addtocard.findById(req.params._id);
    if(!findid){
        res.status(400)
        res.send("user not found");
    }
    await findid.remove();
    res.status(200).json({message:`delete data${req.params._id}`})
})



module.exports = {
    getaddcard,
    postaddcard,
    deletecard
}