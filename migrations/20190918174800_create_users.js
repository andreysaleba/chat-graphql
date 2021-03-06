exports.up = function (knex) {
  return knex.schema.createTable('users', function (table) {
    table.increments();
    table.string('username').unique();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('users');
};
