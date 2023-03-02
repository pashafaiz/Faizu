const express= require('express');
const app = express()
const Router = express.Router()
Router.use(express.json())
const {alldata} = require("../../controllers/daskboard/daskboardcontroller")

Router.get("/",alldata)

module.exports = Router