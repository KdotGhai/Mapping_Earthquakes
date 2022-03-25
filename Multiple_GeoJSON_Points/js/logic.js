// Add console.log to check to see if our code is working.
console.log("working");
// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([37.5, -122.5], 10);

// Coordinates for each point to be used in the line.
let line = [
  [33.9416, -118.4085],
  [37.6213, -122.3790],
  [40.7899, -111.9791],
  [47.4502, -122.3088]
];

// Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
  color: "yellow"
}).addTo(map);


// Add GeoJSON data.
let sanFranAirport =
{"type":"FeatureCollection","features":[{
    "type":"Feature",
    "properties":{
        "id":"3469",
        "name":"San Francisco International Airport",
        "city":"San Francisco",
        "country":"United States",
        "faa":"SFO",
        "icao":"KSFO",
        "alt":"13",
        "tz-offset":"-8",
        "dst":"A",
        "tz":"America/Los_Angeles"},
        "geometry":{
            "type":"Point",
            "coordinates":[-122.375,37.61899948120117]}}
]};
//----------------------------------------------------------------------------------------
// Grabbing our GeoJSON data.
  //***Method # 1 POINTTOLAYER  CALLBACK FUNCTION
/*  L.geoJSON( sanFranAirport, {
  // We turn each feature into a marker on the map.
  pointToLayer: function(feature, latlng) {
    console.log(feature);
    return L.marker(latlng).bindPopup("<h2>" + feature.properties.city + "</h2>");}
  }).addTo(map); 
 */
  //***Method #2 The onEachFeature CALLBACK FUNCTION
  L.geoJSON(sanFranAirport, {
    onEachFeature: function(feature, layer) {
      layer.bindPopup("<h2>Airport Code: " + feature.properties.faa + "</h2> <hr> <h3>"+feature.properties.name+"</h3>");
    }
  }).addTo(map);



//----------------------------------------------------------------------------------------

/* //pull cities.js in cityData
let cityData = cities;

// Loop through the cities array and create one marker for each city.
cityData.forEach(function(city) {
  console.log(city)
  L.marker(city.location)
  .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population + "</h3>")
.addTo(map);
}); */

//Made loop to make markers at each waypoint(vertex)
for (let i = 0; i < line.length; i++) {
 /*  console.log("waypoint" + i) */
  waypoint = line[i]
  L.marker(waypoint).bindPopup("<h2>"+waypoint+"</h2> <hr> <h3>Waypoint "+i+"</h3>").addTo(map);
}
  
// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/navigation-night-v1/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});



// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);