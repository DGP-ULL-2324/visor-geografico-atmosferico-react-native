import settings from '../config/external-api.json' assert { type: "json" };

let stations = []

stations = await fetch(settings.baseUrl + settings.stationsEndpoint)
    .then(response => response.json())
    .then(json => {
        return json.stations.map(fullObject => {
            return {
                "id": fullObject.id_weatherstation,
                "municipio": fullObject.municipality_name,
                "localidad": fullObject.locality,
                "latitud": fullObject.latitude,
                "longitud": fullObject.longitude,
                "altitud": fullObject.altitude,
                "sensors": []
            }
        })
    })

for (let station of stations) {
    station.sensors = await fetch(settings.baseUrl + settings.sensorsEndpoint.replace("{idWeatherstation}", station.id))
        .then(response => response.json())
        .then(json => {
            return json.stations[0].sensors.map(sensor => {
                return {
                    "id": sensor.id_weatherstationsensor,
                    "nombre": sensor.sensor_name,
                    "unidadMedida": sensor.unit,
                    "medida": undefined
                }
            })
        })

    let year = new Date().getFullYear() + ""
    let month = (new Date().getMonth() + 1) + ""
    
    let sensorsReadings = await fetch(settings.baseUrl + settings.readingsEnpoint.replace("{idWeatherstation}", station.id).replace("{year}", year).replace("{month}", month))
        .then(response => response.json())
        .then(json => json.summarized ? json.summarized.sensors : [])

    station.sensors.forEach(element => {
        let medida = sensorsReadings
            .filter( sR => sR.id_weatherstationsensor == element.id)
            .map(sR => sR.dates)
            .flat(Infinity)
            .filter(sR => sR.is_validated)
            .pop()
        if(medida){
            element.medida = medida.values[0]
        }
    });
};

console.log(stations[0])
console.log(stations[0].sensors[0])
console.log(stations[0].sensors[0].medida)

