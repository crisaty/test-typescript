//Loads the express module
const express = require('express')
const app = express()
const port = 5001

// API
const planetService = require('./services/planet')

// Sets our app to use the handlebars engine
app.set('view engine', 'hbs')

// Sets handlebars configurations
app.use(express.static('assets'))
app.get('/', async (req, res) => {
  // Get data from API
  const _planets = await planetService.getPlanets()
  // Render view to user
  res.render('index', { layout: false, planets: _planets })
})

app.listen(port, () => console.log(`App listening in http://localhost:${port}`))
