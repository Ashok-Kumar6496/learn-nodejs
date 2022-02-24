import { geoCode } from './utils/geocode.js';
import { getWeather } from './utils/forecast.js';
// const weatherURL = "http://api.weatherstack.com/current?access_key=be8d76e615b6f36ad39a97bda6c535c7&query=Mumbai";

// const locationURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/Madanapalli.json?access_token=pk.eyJ1IjoiZmRzZWF3ZGZzd2VmZHYiLCJhIjoiY2t2djBzaGdnMmluejJ2cWhzemF3dzg0byJ9.8utDd4yc6Rc2TJSS9hFQJA"

// //When we pass json as true in 1st argument object, it automatically converts response into json.
// request({ url: weatherURL, json: true }, (error, data) => {
//         if(error) {
//         console.log("There is some issue while connecting to weather service!!");
//     } else if(data.body.error) {
//         console.log("Unable to find the location!!", data.body.error)
//     } else {
//         const weather = data.body;
//         console.log("Temperature : " + weather.current.temperature + ". Preciptitation : " + weather.current.precip);
//     }

// })


const address = process.argv[2];
if (!address) {
    console.log('Please provide some address..');
} else {
    geoCode(address, (error, { longitude, latitude, placeName } = {}) => {
        if (!error) {
            console.log('Longitude : ', longitude, 'Latitude : ', latitude, 'Place name : ', placeName);
            getWeather(longitude, latitude, (error, { temperature, precipitation, nearByLocation } = {}) => {
                if (!error) {
                    console.log('Temperature : ', temperature, 'precipitation : ', precipitation, 'NearByLocation : ', nearByLocation);
                } else {
                    console.log('Weather error info: ', error);
                }
            })
        } else {
            console.log('Location Error : ', error);
        }
    })
}

// getWeather(78.3056, 13.8408, (error, locationResponse) => {
//     if (!error) {
//         console.log("Weather info: ", response);
//     } else {
//         console.log("Weather error", error);
//     }
// })

// const sum = (a, b, callback) => {
//     setTimeout(() => {
//         console.log("2 seconds timer!!");
//         callback(a + b);
//         console.log("After call back")
//     }, 2000);
// }

// sum(1, 2, (addition) => {
//     console.log("Call back function", addition)
// })

//Using weather and temperature functions above in async way!!...