const mongoose = require('mongoose');
const {Schema} = mongoose
const recipeSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    cookingTime: {
        type: String,
      
    },
    rating: {
        type: String,
    
    },
    ingredients: {
        type: String,
        required: true,
    },
    method: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('Recipe', recipeSchema)