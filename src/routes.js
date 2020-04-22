const express = require('express')
const routes = express.Router()

const ContactController = require('./controllers/ContactController')

routes.post('/contact', ContactController.store)
routes.get('/contact', ContactController.index)
routes.delete('/contact/:id', ContactController.delete)

module.exports = routes