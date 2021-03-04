const db = require('../data/config')


// should return a list of all recipes in the database.
const getRecipes = () => {
    return db('recipes')
        .select('*')
    }


// should return a list of all ingredients and quantities for a given recipe
const getShoppingList = (recipe_id) => {

}

// should return a list of step by step instructions for preparing a recipe
const getInstructions = (recipe_id) = {

}

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}