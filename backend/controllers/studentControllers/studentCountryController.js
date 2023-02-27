const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs')
const asynchandler = require('express-async-handler');
const mongodb = require('mongodb');
const {protect} = require('../../middleware/authMiddleware');
const User = require('../../Model/studentModel/studentCountryModel')
const { json } = require('express');



const country = asynchandler(async(req,res)=>{
    const {  } = req.body
    let data = await User.find();
    console.log("===>",data);
    res.status(200).json(data)
})

const allcountry = asynchandler(async(req,res)=>{
    const { countryCode, countryName, countrySchools} = req.body

let data  = await User.create({
    countryCode,
    countryName,
    countrySchools
})
res.send(data)
})

const countrypost = asynchandler(async(req,res)=>{
    const { countryCode ,countrySchools, countryName } = req.body
    let data = await User.findOne({countryName})
    JSON.stringify(data)
    if(!data){
        res.status(404).json({
            error:"please valid data"})
    }
    console.log(data);
    if(data.countryCode || data.countryName ){
        res.status(201).json({
            countrySchools: data.countrySchools
        })
    }
})




module.exports = {
    country,
    allcountry,
    countrypost
}