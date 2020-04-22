const connection = require('../database/connection')
module.exports = {
    async index(request, response) {
        const contacts = await connection('contacts').select('*')
        return response.status(200).json(contacts)
    },

    async store(request, response) {
        const { name } = request.body

        await connection('contacts').insert({ name })

        return response.status(201).send('cadastrado')
    },

    async delete(request, response) {

        const { id } = request.params

        const contact = await connection('contacts').select().where('id', id)

        if (contact.length != 1)
            return response.status(400).send({
                error: 'Erro ao deletar contato, pois o mesmo não existe'
            })

        await connection('contacts').where('id', id).delete()
        
        return response.status(200).send({
            success: 'Deletado com sucesso'
        })

    }
}