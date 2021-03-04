const express = require('express')
const recipes = require('./recipes-model')

const router = express.Router()

router.get('/', async ( req, res) => {
    try {
        const result = await recipes.getRecipes()
        res.json(result)
    }
    catch (err){
        console.log(err)
    }
})

module.exports = router