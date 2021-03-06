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

            res.status(500).send("Erreur lors de l'ajout de la salle reserver");
        }

    },
    GetReservationSalle: (req, res) => {
        const { date, datedebut, datefin, equipement } = req.body;
        const dateparse = dayjs(date).format('YYYY-MM-DD');
        const datedebutheure = dayjs(`${dateparse} ${datedebut}`).format('YYYY-MM-DD HH:mm:ss')
        const datefinheure = dayjs(`${dateparse} ${datefin}`).format('YYYY-MM-DD HH:mm:ss')

        try {

            if (req.body.date && req.body.datedebut && req.body.datefin && req.body.equipement) {
                const salledispo = knex.select()
                    .from('salle_reunion')
                    .where({ equipement: equipement })
                    .whereNotIn('salle_reunion.id', knex.from('salle_reunion')
                        .select('salle_reunion.id').join('salle_reserver', 'salle_reunion.id', '=', 'salle_reserver.salle_reunion_id')
                        .where('salle_reserver.date_debut', '<=', datedebutheure).andWhere('salle_reserver.date_fin', '>=', datefinheure)
                        .orWhere('salle_reserver.date_debut', '>=', datedebutheure).andWhere('salle_reserver.date_fin', '<=', datefinheure))
                    .then(function (data) {

                        let resultArray = Object.values(JSON.parse(JSON.stringify(data)));
                        res.status(200).json(resultArray);
                    })
            } else {
                res.status(500).json("erreur de r??cup??rer des salles reserver");

            }

        } catch (error) {
            res.status(500).send("Erreur de reservation")
        }
    }

};

module.exports = ReservationController;

