
exports.up = function(knex) {
    return knex.schema.createTable('salle_reunion', function(table) {
        table.increments('id').unsigned().primary();
        table.string('numero_salle').nullable();
        table.string('capacite').nullable();
        table.string('equipement').nullable();
    });
};

exports.down = function(knex) {
    //return knex.schema.dropTable('salle_reunion');
};
