const knex = require('../db-config');

const SalleReunionController = {

    CreateSalleReunion: async (req, res) => {
        
        try {
          const createsallereunion =   await knex('salle_reunion ').insert({numero_salle:"90",capacite:"150",equipement:"PC"});
          res.status(200).json(createsallereunion);
        } catch (error) {
      
            res.status(500).send("Erreur lors de l'ajout de salle reunion");
        }
    }
    
};

module.exports = SalleReunionController;