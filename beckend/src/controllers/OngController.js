const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const ongs = await connection('ongs').select('*');
        response.json(ongs);

    },

    async create(request, response) {
        const { name, email, whataspp, city, uf } = request.body;

        const id = crypto.randomBytes(4).toString('HEX');

        await connection('ongs').insert({
            id,
            name,
            email,
            whataspp,
            city,
            uf,
        })

        return response.json({ id });
    }
};