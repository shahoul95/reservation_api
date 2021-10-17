const knex = require('../db-config');
var dayjs = require('dayjs');

const ReservationController = {

    CreateReservation: async (req, res) => {
        const { date, datedebut, datefin, id } = req.body;
        const dateparse = dayjs(date).format('YYYY-MM-DD');
        const datedebutheure = dayjs(`${dateparse} ${datedebut}`).format('YYYY-MM-DD HH:mm:ss')
        const datefinheure = dayjs(`${dateparse} ${datefin}`).format('YYYY-MM-DD HH:mm:ss')

        try {
            const createreservation = await knex('salle_reserver').insert({ date_debut: datedebutheure, date_fin: datefinheure, salle_reunion_id: id });
            res.status(200).json(createreservation);
        } catch (error) {
            console.log(error);
            res.status(500).send("Erreur lors de l'ajout du compte");
        }

    },
    GetReservationSalle: async (req, res) => {
        try {


            const { date, datedebut, datefin, equipement } = req.body;
            const dateparse = dayjs(date).format('YYYY-MM-DD');
            const datedebutheure = dayjs(`${dateparse} ${datedebut}`).format('YYYY-MM-DD HH:mm:ss')
            const datefinheure = dayjs(`${dateparse} ${datefin}`).format('YYYY-MM-DD HH:mm:ss')

            /*
                const salledispo = knex.raw('SELECT * from salle_reunion where equipement= ? AND id NOT IN (SELECT salle_reunion.id from salle_reunion join salle_reserver on salle_reserver.salle_reunion_id = salle_reunion.id where salle_reserver.date_debut >= ? and salle_reserver.date_debut <= ? )', [equipement,datedebutheure ,datefinheure]).then(function (data) {
                var resultArray = Object.values(JSON.parse(JSON.stringify(data)));
                console.log(resultArray);
                res.status(200).json(resultArray); 
                 });
                 */

            // la requête va permettre de récupérer les salle de reunion disponible à partir de la date et heure debut et heure fiN
            // Pour cela  j'ai utiliser  la fonction  wherenotin pour permettre de retirer les id  des salles qui est reserver entre la date et heure de debut et heure de fin
            // j'utilise join pour récuperer les salle de reunion qui  appartiennet au salle_reserer grâce l'id et ensuite je fait une condition si la date de bebut est supérieur ou egale à la date de debut et la date de debut doit etre inférieur à la date de fin  et sa me retourne les ids des salles  qui est entre la date debut et date fin  que l'utilisateur à selectionner sur l'interface graphique
            const salledispo = knex.select().from('salle_reunion').where({ equipement: equipement }).whereNotIn('salle_reunion.id', knex.from('salle_reunion').select('salle_reunion.id').join('salle_reserver', 'salle_reunion.id', '=', 'salle_reserver.salle_reunion_id').where('salle_reserver.date_debut', '>=', datedebutheure).andWhere('salle_reserver.date_debut', '<=', datefinheure)).then(function (data) {
                var resultArray = Object.values(JSON.parse(JSON.stringify(data)));
                console.log(resultArray);

                res.status(200).json(resultArray);
            })




        } catch (error) {
            res.status(500).send("Erreur de reservation")
        }
    }

};

module.exports = ReservationController;

