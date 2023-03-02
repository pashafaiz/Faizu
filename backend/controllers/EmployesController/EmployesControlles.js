// const employs = require('../../Model/EmployesModel/EmployesModel')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const Users = require('../../Model/EmployesModel/EmployesModel')

const getemploy = async(req,res)=>{
    let data = await employs.find();
    console.log("======>",data);
    res.status(200).json(data)

}



const postemploy = async(req,res)=>{
    const { employId, employName, employEmail, employNumber, employDob, employMent, employAddress } = req.body
    let cheackemail = employEmail.includes("@gmail.com")
    if(!cheackemail){
        res.status(400)
        throw new Error ("please add the @gmail.com")
    }
    const data = await Users.create({
        employId, 
        employName, 
        employEmail, 
        employNumber, 
        employDob, 
        employMent, 
        employAddress
    })
    res.status(201).json({data})
}

const serchemploy = async(req,res)=>{
    let data = await employs.findById(req.params._id);
    res.status(200).json(data);
    console.log(req.params.id);
 }



 const updateEmployes= async (req,res)=>{
    let findid = await Users.findById(req.params._id);
    if(!findid){
        res.status(200).json({massege:"please enter valid id"})
 
    }
    const updatedata = await Users.findByIdAndUpdate(req.params._id,req.body,{
        new : true
    })
res.status(200).json(updatedata)

}



const deleteEmployes = async(req,res)=>{
    let data  = await Users.findById(req.params._id)
    if(!data){
        res.status(400);
        res.send("user not found");
    }
    if(!data){
        res.status(401).json({message: "data is deteted"});
    }
    await data.remove();
    res.status(200).json({message: "data is deteted"});
    
}


module.exports = {
    getemploy,
    postemploy,
    serchemploy,
    updateEmployes,
    deleteEmployes

}