const Recipe = require('../models/Recipe');

module.exports.add = async (req, res) => {

  try {
    
    console.log("🚀 ~ add here", req.body)

    const recipeCreated = await Recipe.create(req.body)
        console.log("🚀 ~ recipeCreated", recipeCreated)
        res.send({success: true})

  } catch (error) {
    console.log("🚀 ~ Error in add", error.message)
        res.send({success: false, error: error.message})
  }

}

module.exports.list = async (req, res) => {
    
    
  try {
      
      const recipes = await Recipe.find()
      res.send({success: true, recipes})
      
  } catch (error) {
      console.log("🚀 ~ Error in list recipes", error.message)
      res.send({success: false, error: error.message})
  }
}