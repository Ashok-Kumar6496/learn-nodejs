const path = require('path');
const express = require('express');
const geoCode = require('../src/utils/geocode.js');
const { response } = require('express');
const getWeather = require('../src/utils/forecast')
const app = express();
app.use(express.static(path.join(__dirname, '../public')))

// app.get('', (request, response) => {
//     response.send('Hello express!!');
// })

// app.get('/help', (req, res)=> {
//     res.send('This is help page!!')
// })

// app.get('/about', (req, res)=> {    
//     res.send('This is about myself!!')
// })

app.get('/test', (request, response) => {
    response.send('<h1>This is a testing page</h1>')
})

app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: 'Please provide some address!!'
        })
    }

    geoCode(req.query.address, (locationError, { longitude, latitude, placeName } = {}) => {
        if (locationError) {
            return res.send({
                error: locationError
            })
        }

        getWeather(longitude, latitude, (weatherError, forecastData) => {
            if (weatherError) {
                return res.send({
                    error: weatherError
                })
            }
            res.send({
                forecastData,
                location: placeName,
                searchedAddress: req.query.address
            })
        })
    })
})

app.listen(3000, () => {
    console.log('Server up and running at port 3000');
})