
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('salle_reserver').del()
    .then(function () {
      // Inserts seed entries
      return knex('salle_reserver').insert(
        { date_debut: "2021-10-11 10:00", date_fin: "2021-10-11 11:00", salle_reunion_id: 2 }
        );
    });
};
