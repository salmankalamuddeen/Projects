const request = require('request')
const forecast=(latitude,longtitude,callback)=>{
    const url = 'https://api.open-meteo.com/v1/forecast?latitude='+latitude+'&longitude='+longtitude+'&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m'
    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (response.body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, response.body.current.temperature_2m)
        }
    })
}
module.exports = forecast