
exports.up = function(knex) {
    return knex.schema.createTable('salle_reserver', function(table) {
        table.increments('id').unsigned().primary();
        table.dateTime('date_debut').notNull();
        table.dateTime('date_fin').notNull();
        table.integer('salle_reunion_id')
            .unsigned()
            .notNull()
            .references('id')
            .inTable('salle_reunion')
            .onDelete('CASCADE');
     
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('salle_reserver');
};
