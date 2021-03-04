const db = require('../data/config')


// should return a list of all recipes in the database.
const getRecipes = () => {
    return db('recipes')
        .select('*')
    }


// should return a list of all ingredients and quantities for a given recipe
const getShoppingList = (recipe_id) => {
    return db({ri: 'recipes_ingredients'})
        .join({i: 'ingredients'}, 'i.id', "ri.ingredient_id")
        .where('recipe_id', recipe_id)
        .select(
            'ri.recipe_id',
            {ingredient: 'i.name'},
            'ri.quantity'
            )

}

// should return a list of step by step instructions for preparing a recipe
const getInstructions = (recipe_id) = {

}

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}