const express = require('express')
const routes = express.Router()

const ContactController = require('./controllers/ContactController')
const SendMessageController = require('./controllers/SendMessageController')

routes.post('/contact', ContactController.store)
routes.get('/contact', ContactController.index)
routes.delete('/contact/:id', ContactController.delete)

routes.get('/send', SendMessageController.index)

module.exports = routes