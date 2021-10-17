
exports.up = function(knex) {
    return knex.schema.createTable('client', function(table) {
        table.increments('id').unsigned().primary();
        table.string('nom').nullable();
        table.string('prenom').nullable();
        table.string('identifiant').nullable();
        table.string('password').nullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('client');
};
