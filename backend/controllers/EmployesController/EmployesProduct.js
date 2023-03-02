const jwt = require('jsonwebtoken');
const mongoose = require('mongodb');
const Users = require('../../Model/EmployesModel/employessProductModel');
const asynchandler = require('express-async-handler');



const getproduct = asynchandler(async(req,res)=>{
    let data  = await Users.findOne({});
    console.log("================>",data);
    res.status(200).json(data);
})





const addProduct = asynchandler(async (req, res) => {

    const { title, dis, price, reting,img,color ,size,quentity} = req.body
    if (!title && !dis && !price && !reting && !color && !img && !size && !quentity  ) {
        res.status(300).json({ message: "Please add all Filed" })
    }
    let data = await Users.create({ 
        title,
        dis,
        price,
        reting,
        color,
        img, 
        size,
        quentity
    });
    console.log("====>", data);
    res.status(200).json(data)
})

const updateproduct = asynchandler(async (req, res) => {
    let findid = await Users.findById(req.params._id);
    if (!findid) {
        res.status(300);
        res.send("user not found");
    }

    const updateusers = await Users.findByIdAndUpdate(req.params._id, req.body, {
        new: true
    })
    console.log("=====>", updateusers);
    
    res.status(200).json({ message: `updatedata ${req.params._id}` })
})
const deleteproduct = asynchandler(async (req, res) => {
    let findid = await Users.findById(req.params._id);
    if (!findid) {
        res.status(300);
        res.send("user not found");
    }
    await findid.remove();


    res.status(200).json({ message: `delete data ${req.params._id}` });
})

// const generateToken = (id) => {
//     return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "20d" })
// }

module.exports = {
    getproduct, addProduct, updateproduct, deleteproduct
}