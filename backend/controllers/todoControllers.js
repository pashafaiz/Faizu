const jwt = require('jsonwebtoken');
const db = require('../config');
db();
const bcrypt = require('bcryptjs')
const mongodb= require('mongodb');
const User = require('../Model/todoModel')
const asynchandler = require('express-async-handler');

const registeruser = asynchandler(async (req, res) => {
    const { Firstname, Lastname, Email, Phone, PinCode, Addresh, State } = req.body
    if (!Firstname|| !Lastname || !Email || ! Phone || !PinCode|| !Addresh || !State) {
        res.status(400)
        throw new Error("please add all fields");
    }
        //check userExits user email
        // const userExists = await User.findOne({email})
       // console.log("=======>SDS userExists====>",userExists);
        // if(userExists){
        //     res.status(400)
        //     throw new Error("Email already exits")
        // }else{
        //     if(password.length>8  || password.length<8){
        //         res.status(400)
        //         throw new Error("Password length must be 8")
        //     }
        // }


    //     let checkmail = email.includes("@gmail.com")
    //    if(!checkmail){
    //     res.status(400)
    //     throw new Error("Please add @gmail.com")
    //    }


       const data =  await User.create({
        Firstname, Lastname, Email, Phone, PinCode, Addresh,State
    
})



if(data){
    res.status(201).json({
        _id:data.id,
        Firstname:data.Firstname,
        Lastname:data.Lastname,
        Email:data.Email,
        Phone:data.Phone,
        PinCode:data.PinCode,
        Addresh:data.Addresh,
        State:data.State,
        token:generateToken(data._id) 
    })
   }else{
    res.status(400)
    throw new Error("data is already exits")
   }
})


   const loginuser = asynchandler(async (req, res) => {
        const {  Firstname, Lastname, Email, Phone, PinCode, Addresh} = req.body
    const user1 = await User.findOne({email})
    console.log("====dsds===>>>",user1);
    if(user1 && (bcrypt.compare(Phone,user1.Phone))){
      res.json({
        _id:data.id,
        Firstname,
        Lastname,
        Email,
        Phone,
        PinCode,
        Addresh,
        State

        //   token:generateToken(user1._id) 
      })
    } else{
      res.status(400)
          throw new Error("Invalid credentials")
    }
})


const getMe = asynchandler(async (req, res) => {
    const { _id,Firstname, Lastname, Email, Phone, PinCode, Addresh,State} = await User.findById(req.user.id)
     res.status(201).json({
        _id,
        Firstname,
        Lastname,
        Email,
        Phone,
        PinCode,
        Addresh,
        State,


   token:generateToken(User._id)
 
     })
     })
     const generateToken=(id)=>{
        return jwt.sign({id}, process.env.JWT_SECRET,{
        expiresIn :'30d',
       })
       }


       

       const updateuser =asynchandler( async (req,res)=>{
        let findid = await user.findById(req.params._id);
        
        if(generateToken){
        const updateusers = await(req.User._id,{
            new : true
        
        })
        
        
    }
        res.status(200).json({message : `updatedata ${req.params._id}`})
    })
    
    const deleteuser = asynchandler( async(req,res)=>{
        let findid = await user.findById(req.params._id);
        if(!findid){
            res.status(400);
            res.send("user not found");
        }
        if(generateToken){
         await findid.remove();
         }
    
       
        res.status(200).json({message: `delete data ${req.params._id}`});
    })
    

     
module.exports = {
    registeruser,
    loginuser,
    getMe,
    updateuser,
    deleteuser

}