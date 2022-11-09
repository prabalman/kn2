/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {userid: 1, name: 'Ashley', email: 'age@bg.edu', pwd: 'ashley123', deleted: '0'},
    {userid: 2, name: 'Aayusha', email: 'ashe@bg.edu' , pwd: 'aayusha123', deleted: '0'},
    {userid: 3, name: 'Varun', email: 'var@bg.edu' , pwd: 'varun123', deleted: '0'}
  ]);
};
