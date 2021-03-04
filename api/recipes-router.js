const express = require('express')
const recipes = require('./recipes-model')

const router = express.Router()

router.get('/', async ( req, res) => {
    try {
        const results = await recipes.getRecipes()
        res.json(results)
    }
    catch (err){
        console.log(err)
    }
})

router.get('/recipes/:id/shoppingList', async ( req, res ) => {
    try {
        const results = await recipes.getShoppingList(req.params.id)
        res.json(results)
    } catch (err){
        console.log(err)
    }
})

module.exports = router