/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('users', function (table) {
        table.increments('userid', 50).primary();
        table.string('name', 255).notNullable();
        table.string('email', 255).unique().notNullable();
        table.string('pwd', 255).notNullable();
        table.boolean('deleted').notNullable().defaultTo(0);
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('schools')
    // knex.schema.dropTable('recipes'),
    // knex.schema.dropTable('last_accesed')
};
