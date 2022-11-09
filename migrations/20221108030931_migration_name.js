/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('recipes', function (table){
        table.increments('userid',50).primary();
        table.blob('recipe',100000);
        table.string('skey',5).notNullable();
        table.integer('created_date').notNullable();
        table.real('timestamp').notNullable();
        table.boolean('deleted').notNullable().defaultTo(0);
        table.foreign('userid').references('users.userid');
    })
    //)
    // .then(
    //     knex.schema.createTable('last_accessed', function(table){
    //         table.increments('userid',50).primary();
    //         table.string('timetamp').notNullable();
    //         table.foreign('userid').reference('userid').inTable('users');
    //     })
    // )
    
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('recipes')
};
