const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asynchandler = require ('express-async-handler');
const mongodb = require ('mongodb');
// const { protect } = require('../../middleware/authMiddleware');
const User = require('../../Model/studentModel/profileModel');       
const { json } = require('express');
//const profile = require('../../Model/studentModel/profileModel')
const getprofile =asynchandler( async(req,res)=>{
    const data = await User.findById(req.params._id)
    if(!data){
        res.status(404).json({error:"not found"})
    }
    res.status(201).json({
        FirstName:data.FirstName,
        LastName:data.LastName,
        Email:data.Email,
        Gender:data.Gender
    })

})

const postprofile = asynchandler(async(req,res)=>{
   // const data =  await User.findById(req.params._id)
    const { FirstName, LastName, Email, Gender, Images} = req.body
   // if(data.FirstName == FirstName && data.LastName == LastName && data.Email == Email && data.Gender == Gender){
    if(!FirstName || !LastName || !Email || !Gender || !Images ){
        res.status(200).json({error:"please add all filds"})


    }
        const pro = await User.create({
            FirstName,
            LastName,
            Email,
            Gender,
            Images
        })

        if(pro){
            res.status(200).json({
                FirstName,
                LastName,
                Email,
                Gender,
                Images
            })
        }
        else{
            res.status(404).json({error:"detail is invalid"})
        }
    
     
       // }else{
         //   res.status(404).json({error:"detail in invalid"})
      //  }

})
module.exports = {
    getprofile,
    postprofile
}