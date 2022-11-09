/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('last_accessed', function(table){
        table.increments('userid',50).primary();
        table.string('timetamp').notNullable();
        table.foreign('userid').references('users.userid');
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('last_accesed')
};
