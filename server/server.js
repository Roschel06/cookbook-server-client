const express = require('express')
const app = express()
const mongoose = require('mongoose')

const db = require('./config/db');
require('dotenv').config()
db()


app.use(express.json())

app.use('/recipes', require('./routes/recipeRoutes'))


const port = process.env.PORT || 4001
app.listen(port, () => console.log('Server Started',port))