const geocode = require('./functions/geocode')
const forecast = require('./functions/forecast')
const address=process.argv[2]


if (!address) {
    console.log('Please provide an address')
} else {
    geocode(address, (error, data) => {
        if (error) {
            return console.log(error)
        }

        forecast(data.latitude, data.longitude, (error, forecastData) => {
            if (error) {
                return console.log(error)
            }

            console.log('the tempatrue of '+data.location+' is ')
            console.log(forecastData)
        })
    })
}


