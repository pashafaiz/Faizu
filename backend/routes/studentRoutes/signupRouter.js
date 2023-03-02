const express= require('express');
const Router = express.Router();
Router.use(express.json())
const { details, PostSignup } = require('../../controllers/studentControllers/SignupController');

Router.get('/',details)
Router.post('/',PostSignup)

module.exports = Router