
exports.up = function(knex, Promise) {
    return knex.schema
    .createTable('todo', function (table) {
       table.increments('id');
       table.string('text', 255).notNullable();
       table.boolean('completed').defaultTo(false)
       table.timestamps(false,true)
    })
};

exports.down = function(knex, Promise) {
    return knex.schema
    .dropTableIfExists('todo')
};




