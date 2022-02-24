import request from 'postman-request';

//To get the latitude and longitude of specific location
export const geoCode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiZmRzZWF3ZGZzd2VmZHYiLCJhIjoiY2t2djBzaGdnMmluejJ2cWhzemF3dzg0byJ9.8utDd4yc6Rc2TJSS9hFQJA';
    request({ url: url, json: true }, (error, {body}) => {
        if (error) {
            callback('Error while connecting to Geo location service!!');
        } else if (body.features.length === 0) {
            callback('Unable to find the location!! Try someother search.');
        } else {
            callback(undefined, {
                longitude: body.features[0].center[0],
                latitude: body.features[0].center[1],
                placeName: body.features[0].place_name
            })
        }
    })
}