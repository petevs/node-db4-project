
exports.up = async function(knex) {
  
    await knex.schema.createTable("recipes", (table) => {
        table.increments("id")
        table.text('name').notNull()
        })

    await knex.schema.createTable("ingredients", (table) => {
        table.increments("id")
        table.text('name').notNull()
    })

    await knex.schema.createTable("steps", (table) => {
        table.increments("id")
        table.integer('step_number').notNull()
        table.text('instructions').notNull()
        table
            .integer('recipe_id')
            .notNull()
            .references('id')
            .inTable('recipes')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
    })


    await knex.schema.createTable("recipes_ingredients", (table) => {
        table
            .integer('recipe_id')
            .notNull()
            .references('id')
            .inTable('recipes')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
        table
            .integer('ingredient_id')
            .notNull()
            .references('id')
            .inTable('ingredients')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
        table.float('quantity')
        table.primary(['recipe_id', 'ingredient_id'])
    })


};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists('recipes_ingredients')
    await knex.schema.dropTableIfExists('steps')
    await knex.schema.dropTableIfExists('ingredients')
    await knex.schema.dropTableIfExists('recipes')
};
