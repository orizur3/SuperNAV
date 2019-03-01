var NodeGeocoder = require('node-geocoder');

var options = {
  provider: 'google',
  apiKey: 'AIzaSyD-x2XCvFbeRPUUIx1yoER2DIJ088GkaWc', // for Mapquest, OpenCage, Google Premier
};

var geocoder = NodeGeocoder(options);

geocoder.geocode('Israel')
  .then(function (res) {
    console.log(res[0].latitude);
  })
  .catch(function (err) {
    console.log(err);
  });
