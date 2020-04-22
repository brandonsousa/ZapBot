const express = require('express')
const path = require('path')
const handlebars = require('express-handlebars')
const app = express()

const routes = require('./routes')

app.use(express.json())

app.engine('handlebars', handlebars({extname: 'handlebars', defaultLayout: 'main' ,layoutsDir: __dirname + '/views/'}))
app.set('views', path.join(__dirname, 'views/'))
app.set('view engine', 'handlebars')
app.use(express.static(path.join(__dirname, 'public/')))

app.get('/', (request, response) =>{
    return response.render('main')
})

app.use(routes)

app.listen(3333)