const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asynchandler = require ('express-async-handler');
const mongodb = require ('mongodb');
const { protect } = require('../../middleware/authMiddleware');
const User = require('../../Model/studentModel/courseModel');       
const { json } = require('express');



const postCourse = asynchandler(async(req,res)=>{
    let data  = await User.create({
        Course:req.body.Course
    });
    console.log("=======>",data);
    res.status(200).json({
        data
    });
});



const getCourse = asynchandler(async(req,res)=>{
    let data = await User.find();
    console.log("==========>",data);
    res.status(200).json(data);
});


const SearchCourse = asynchandler(async(req,res)=>{
    let data = await User.findById(req.params.id);
    res.status(200).json(data);
})



module.exports = {
    postCourse,
    getCourse,
    SearchCourse
}