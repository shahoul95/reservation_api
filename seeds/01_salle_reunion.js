let rooms = require('./rooms.json');
 

exports.seed = function(knex) {

  return knex('salle_reunion').del()
    .then(function () {

    

     for(var i in rooms){
       
   const jsonequipement =  JSON.stringify(rooms[i][0].equipements)
  const jsonequipementparse = JSON.parse(jsonequipement)


      return knex('salle_reunion').insert([
        {id:1,numero_salle: rooms[i][0].name,capacite: rooms[i][0].capacity,equipement:jsonequipementparse[0].name},
        {id:2,numero_salle:rooms[i][1].name,capacite:rooms[i][1].capacity,equipement:jsonequipementparse[1].name},
        {id:3,numero_salle:rooms[i][2].name,capacite:rooms[i][2].capacity,equipement:jsonequipementparse[0].name},
        {id:4,numero_salle: rooms[i][3].name ,capacite:rooms[i][3].capacity,equipement:jsonequipementparse[1].name},
      ]);
     }
        



      
    });
};
