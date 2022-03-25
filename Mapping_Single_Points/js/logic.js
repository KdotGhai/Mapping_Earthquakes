// Add console.log to check to see if our code is working.
console.log("working");

//13.2.4 (Adding Map Object)
    //Method #1
// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([40.7, -94.5], 4);


//  Add a marker to the map for Los Angeles, California.
/* let marker = L.marker([34.0522, -118.2437]).addTo(map); */

  //for circle we can replace the marker method with circle method as shown on leaflet
let marker = L.circleMarker([34.0522, -118.2437], {
  radius: 100,
  color: "black",
  fillColor:"#ffffa1"
}).addTo(map);


    //Method #2
// Create the map object with a center and zoom level.
/* let map = L.map("mapid", {
    center: [
      40.7, -94.5
    ],
    zoom: 4
  }); */

  /* ----------------------------------------------- */


// We create the tile layer that will be the background of our map.
  //Method #1
/* let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
}); */
    //Method #2 (this uses static tiles API from Mapbox, it directly insert stle into link instead of dictionary key)
// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});



// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);