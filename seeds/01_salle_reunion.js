
exports.seed = function(knex) {
  
  return knex('salle_reunion').del()
    .then(function () {
      // Inserts seed entries
      return knex('salle_reunion').insert([
        {id:1,numero_salle:"100",capacite:"10",equipement:"PC"},
        {id:2,numero_salle:"150",capacite:"7",equipement:"PC"},
        {id:3,numero_salle:"95",capacite:"15",equipement:"Projecteur"},
        {id:4,numero_salle:"78",capacite:"7",equipement:"Projecteur"},
      ]);
    });
};
