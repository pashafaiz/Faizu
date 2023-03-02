const express = require('express');
const router = express.Router();

router.use(express.json())
router.use(express.json())
const { getemploy,serchemploy, postemploy, updateEmployes, deleteEmployes } = require('../../controllers/EmployesController/EmployesControlles');

router.get('/me', getemploy)
router.get('/:_id',serchemploy)
router.post("/", postemploy)
router.put('/:_id',updateEmployes)
router.delete('/:_id',deleteEmployes)

module.exports =router;