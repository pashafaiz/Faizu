const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asynchandler = require ('express-async-handler');
const mongodb = require ('mongodb');
const { protect } = require('../../middleware/signupMiddleware');
const User = require('../../Model/studentModel/signupModel');       
const { json } = require('express');




const details = asynchandler(async(req,res)=>{
    let result = await User.findOne({

    })})


    const PostSignup = asynchandler(async(req,res)=>{
        const { FirstName, LastName, Email, Number, Gender,Password } = req.body
        let checkemail = Email.includes("@gmail.com");
        if(!checkemail){
            res.status(400)
            throw new Error(" Please Add Correct @gmail.com")
        }
        const data = await User.create({
            FirstName,
            LastName,
            Email,
            Gender,
            Number,
            Password
        })

        res.status(201).json({
            FirstName:data.FirstName,
            LastName:data.LastName,
            Email:data.Email,
            Gender:data.Gender,
            Number:data.Number,
            Password:data.Password

        })


    }) 

    const generateToken = (id)=>{
        return jwt.sign({ id }), process.env.JWT_SECRET,{
            expiresIn:'30d'
        }
    }


module.exports = {
    details,
    PostSignup
}