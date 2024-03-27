const request = require('request')

const geocode=(address,callback) => {
    const geocodeURL = 'https://geocode.maps.co/search?q='+address+'&api_key=660111ae06b87443365047vha36eb82'

    request({ url: geocodeURL, json: true }, (error, response) => {
        if(error)
        {
            callback('Unable to connect to location services!')
        }
        else if(response.body[0].boundingbox.length==0)
        {
            callback('Unable to find location. Try another search.')
        }
        else{
            callback(undefined, {
                latitude: response.body[0].lat,
                longitude: response.body[0].lon,
                location: response.body[0].display_name
            })
        }
    })
}
module.exports = geocode