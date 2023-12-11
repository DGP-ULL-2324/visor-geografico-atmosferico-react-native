const settings = require('../config/external-api.json')

console.log(settings)

fetch(settings.baseUrl + settings.stationsEndpoint).then(e => console.log(e))