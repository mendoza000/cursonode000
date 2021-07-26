require('dotenv').config();
const express = require('express')
const hbs = require('hbs');

const app = express()

app.set('view engine', 'hbs')
hbs.registerPartials( __dirname + '/views/partials' )
/* cargamos una pagina estatica como el home o como el 404 */
app.use( express.static('public') )

app.get('/', (req, res) => {
  res.render('home',{
    name: "Omar Mendoza",
    title: "Curso NodeJS"
  })
})

app.get('/generic', (req, res) => {
  res.render('generic',{
    name: "Omar Mendoza",
    title: "Curso NodeJS"
  })
})

app.get('/elements', (req, res) => {
  res.render('elements',{
    name: "Omar Mendoza",
    title: "Curso NodeJS"
  })
})

app.get('*', (req, res) => {
  res.send( '404 - Page not found' )
})
 
app.listen(process.env.PORT)