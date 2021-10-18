let personne = require('./rooms.json');
 

exports.seed = function(knex) {

  return knex('salle_reunion').del()
    .then(function () {

    

     for(var i in personne){
       
   const jsonequipement =  JSON.stringify(personne[i][0].equipements)
  const jsonequipementparse = JSON.parse(jsonequiepent)


      return knex('salle_reunion').insert([
        {id:1,numero_salle: personne[i][0].name,capacite: personne[i][0].capacity,equipement:jsonequipementparse[0].name},
        {id:2,numero_salle:personne[i][1].name,capacite:"7",equipement:jsonequipementparse[1].name},
        {id:3,numero_salle:personne[i][3].name,capacite:"15",equipement:jsonequipementparse[0].name},
        {id:4,numero_salle: personne[i][4].name ,capacite:"7",equipement:jsonequipementparse[1].name},
      ]);
     }
        



      
    });
};
