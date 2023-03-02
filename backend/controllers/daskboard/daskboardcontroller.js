const studentsub = require("../../Model/studentModel/studentModel")
const Employ = require('../../Model/EmployesModel/EmployesModel')
const product = require('../../Model/studentModel/profileModel')

const alldata = async (req, res) => {
  let sub = await studentsub.find({})
  let emp = await Employ.find({})
  let prod = await product.find({})

 const arr = [
    sub={
        "imadge":"https://watermark.lovepik.com/photo/20211130/large/lovepik-primary-school-students-study-picture_501212451.jpg",
        "name":"student",
        "data":sub
    },
    emp={
        "image":"https://wallpaperaccess.com/full/4322025.jpg",
        "name":"employ",
        "data":emp
        },
    prod={
        "image":"https://stickybranding.com/wp-content/uploads/2019/11/How-to-name-your-product.jpg",
        "name":"products",
        "data":prod
    }
  ];

res.status(200).json({arr})
}

module.exports = { alldata }