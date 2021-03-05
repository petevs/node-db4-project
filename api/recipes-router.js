const express = require('express')
const recipes = require('./recipes-model')

const router = express.Router()

router.get('/', async ( req, res, next ) => {
    try {
        const results = await recipes.getRecipes()
        res.status(200).json(results)
    }
    catch (err){
        next(err)
    }
})

router.get('/recipes/:id/shoppingList', async ( req, res, next ) => {
    try {
        const results = await recipes.getShoppingList(req.params.id)
        res.status(200).json(results)
    } catch (err){
        next(err)
    }
})

router.get('/recipes/:id/instructions', async ( req, res, next ) => {
    try {
        const results = await recipes.getInstructions(req.params.id)
        res.status(200).json(results)
    }
    catch (err) {
        next(err)
    }
})

router.get('/ingredients/:id/recipes', async ( req, res, next ) => {
    try {
        const results = await recipes.getRecipesByIngredient(req.params.id)
        res.status(200).json(results)
    }
    catch (err) {
        next(err)
    }
})

router.use((err, req, res, next) => {
    res.status(500).json({
        error: err
    })
})

module.exports = router