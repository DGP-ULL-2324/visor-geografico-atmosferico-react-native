import settings from '../../resources/config/external-api.json' assert { type: "json" };

async function loadSensorlessStations() {
    return fetch(settings.baseUrl + settings.stationsEndpoint)
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
}

async function addSensorsAndMeassuresToStations(stations) {
    for (let station of stations) {
        await getStationSensors(station)
            .then(async sS => {
                station.sensors = sS
                getStationSensorReadings(station)
                    .then(sR => addReadingsToSensors(station, sR))
            })
    };
    return stations
}

async function addReadingsToSensors(station, readings) {
    station.sensors.forEach(element => {
        let medida = readings
            .filter(sR => sR.id_weatherstationsensor == element.id)
            .map(sR => sR.dates)
            .flat(Infinity)
            .filter(sR => sR.is_validated)
            .pop()
        if (medida) {
            element.medida = medida.values[0]
        }
    });
}

async function getStationSensorReadings(station) {
    let year = new Date().getFullYear() + ""
    let month = (new Date().getMonth() + 1) + ""

    return fetch(settings.baseUrl + settings.readingsEnpoint.replace("{idWeatherstation}", station.id).replace("{year}", year).replace("{month}", month))
        .then(response => response.json())
        .then(json => json.summarized ? json.summarized.sensors : [])
}

async function getStationSensors(station) {
    return fetch(settings.baseUrl + settings.sensorsEndpoint.replace("{idWeatherstation}", station.id))
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
}

async function fullLoad() {
    return loadSensorlessStations()
        .then(st => addSensorsAndMeassuresToStations(st))
}

export default fullLoad