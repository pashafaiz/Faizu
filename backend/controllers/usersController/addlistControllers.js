const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs')
const Addcart = require("../../Model/usersModel/addlistModel")


const getadd = async (req, res) => {

    try {
        const data = await Addcart.find({})
        if (!data) {
            res.status(404).json("data is missing")
        }
        res.status(200).json(data)
    } catch (error) {
        res.status(404).json(error)
    }
    if(data){
        res.status(201).json({
            _id:data.id,
            title:data.title,
            price:data.price,
            dis:data.dis,
            rating:data.rating,
            image:data.image,
            quantity:data.quantity,
            token:generateToken(User._id) 
        })
       }else{
        res.status(400)
        throw new Error("data is already exits")
       }
    }
 
        
        // res.status(200).json({token:generateToken(user._id)} )


 

const postadd = async (req, res) => {
    try {
        const { title, image, price, rating, dis,quantity } = req.body
        if (!title || !image || !price || !rating || !dis || !quantity) {
            res.status(400).json({ error: "missing the fild" })
        }
        const data = await Addcart.create({
            title,
            price,
            dis,
            rating,
            image,
            quantity,
        token: generateToken(User._id)
            
        })
        res.status(200).json(data)
    } catch (error) {
        res.status(404).json(error)
    }
} 



const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    })
}


module.exports = { getadd, postadd }