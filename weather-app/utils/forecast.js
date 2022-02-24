import request from "postman-request";

//To get the weather info based on latitude and longitude
export const getWeather = (longitude, latitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=be8d76e615b6f36ad39a97bda6c535c7&query=${latitude},${longitude}`;
    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('Error while connecting to weather service!!');
        } else if (body.error) {
            callback('Unable to locate the place!! try another place.');
        } else {
            callback(undefined, {
                temperature: body.current.temperature,
                precipitation: body.current.precip,
                nearByLocation: body.location.name
            })
        }
    })
}