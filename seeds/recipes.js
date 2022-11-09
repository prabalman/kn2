/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('recipes').del()
  await knex('recipes').insert([
    {userid: 1, recipe: 'Nullam quis risus eget urna mollis ornare vel eu leo.', skey: 'bluepanda', created_date: new Date(), timestamp: new Date()},
    {userid: 2, recipe: 'Maecenas sed diam eget risus varius blandit sit amet non magna.', skey: 'orangesky', created_date: new Date(), timestamp: new Date()},
    {userid: 3, recipe: 'Integer posuere erat a ante venenatis dapibus posuere velit aliquet.', skey: 'yellowdragon', created_date: new Date(), timestamp: new Date()}
  ]);
};
