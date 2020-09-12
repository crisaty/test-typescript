const axios = require('axios')

const planetController = {}

planetController.getPlanets = () =>
  axios
    .get('http://localhost:5000/api/v1/planets')
    .then(function (response) {
      // console.log(response.data)
      // handle success
      return response.data.results
    })
    .catch(function (error) {
      // handle error
      console.log(error)
    })

module.exports = planetController
