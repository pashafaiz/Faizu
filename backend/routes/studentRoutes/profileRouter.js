const express= require('express');
const Router = express.Router();
Router.use(express.json())
const { getprofile, postprofile } = require('../../controllers/studentControllers/ProfileController')

Router.get('/:_id',getprofile)
Router.post('/:_id',postprofile)

module.exports = Router