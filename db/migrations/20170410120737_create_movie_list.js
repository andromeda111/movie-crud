exports.up = function(knex) {
  return knex.schema.createTable('movies', (table) => {
    table.increments();
    table.string('title').notNullable().defaultTo('')
    table.string('director').notNullable().defaultTo('')
    table.integer('year').notNullable().defaultTo(0)
    table.integer('my_rating').notNullable().defaultTo(0)
    table.text('poster_url').notNullable()
    table.timestamps(true, true)
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('movies');
};
