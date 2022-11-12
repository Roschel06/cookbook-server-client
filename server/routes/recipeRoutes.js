const express = require('express');
const router = express.Router();

const recipeController = require('../controllers/recipeController')

router.post('/add', recipeController.add)
router.get('/list', recipeController.list)


module.exports = router;