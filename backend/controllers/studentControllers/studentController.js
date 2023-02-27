
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs')
const asynchandler = require('express-async-handler');
const mongodb = require('mongodb');
const {protect} = require('../../middleware/authMiddleware');
const User = require('../../Model/studentModel/studentModel')
const { json } = require('express');



const addproduct = asynchandler(async(req,res)=>{
    const { Subject } = req.body
    let data = await User.create({Subject:req.body.Subject});
    console.log("===>",data);
    res.status(200).json(data)
})

const getstudent = asynchandler(async(req,res)=>{
let data  = await User.find()
console.log("====>",data);
res.status(200).json(data)
})




module.exports = {
    addproduct,
    getstudent
}