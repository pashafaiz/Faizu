const express = require('express');
const { model } = require('mongoose');
const { route } = require('./studentCountryRoutes');
const router = express.Router();
router.use(express.json());
const { postCourse, getCourse, SearchCourse } = require('../../controllers/studentControllers/courseController');
// const router = require('../userAUTHroutes');

router.post('/',postCourse);
router.get('/',getCourse);
router.get('/:id',SearchCourse);



module.exports=router