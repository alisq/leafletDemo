mapboxgl.accessToken = 'pk.eyJ1IjoiaWFtYXNxIiwiYSI6ImNrc296bmRvaDAxMGkydnBsNGcwMzQwdGcifQ.PkRl94Sjs9H2IM0auw-zdg';



var map = new mapboxgl.Map({
    container: 'mapid', // HTML container id
    style: 'https://api.mapbox.com/styles/v1/iamasq/cksp237zq0wc017mg4vxumsw3/wmts?access_token=pk.eyJ1IjoiaWFtYXNxIiwiYSI6ImNrc296bmRvaDAxMGkydnBsNGcwMzQwdGcifQ.PkRl94Sjs9H2IM0auw-zdg', // style URL
    center: [-21.9270884, 64.1436456], // starting position as [lng, lat]
    zoom: 13
  });
  var popup = new mapboxgl.Popup()
  .setHTML('<h3>Reykjavik Roasters</h3><p>A good coffee shop</p>');

  var marker = new mapboxgl.Marker()
.setLngLat([-21.9270884, 64.1436456])
.setPopup(popup)
.addTo(map)

  

// var mymap = L.map('mapid').setView([51.505, -0.09], 13);

// //var map = L.map('map').setView([38.97416, -95.23252], 15);
// mymap.accessToken = 'pk.eyJ1IjoiaWFtYXNxIiwiYSI6ImNrc296bmRvaDAxMGkydnBsNGcwMzQwdGcifQ.PkRl94Sjs9H2IM0auw-zdg';
// // Add tiles from the Mapbox Static Tiles API
// // (https://docs.mapbox.com/api/maps/#static-tiles)
// // Tiles are 512x512 pixels and are offset by 1 zoom level


// L.tileLayer(
//     'https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=' + mymap.accessToken, {
//         tileSize: 512,
//         zoomOffset: -1,
//         attribution: '© <a href="https://apps.mapbox.com/feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
//     }).addTo(mymap);
// // L.tileLayer('https://api.mapbox.com/styles/v1/iamasq/cksp237zq0wc017mg4vxumsw3.html?fresh=true&title=copy&access_token=pk.eyJ1IjoiaWFtYXNxIiwiYSI6ImNrc296bmRvaDAxMGkydnBsNGcwMzQwdGcifQ.PkRl94Sjs9H2IM0auw-zdg', {
// //     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
// //     maxZoom: 18,
// //     //id: 'mapbox/streets-v11',
// //     tileSize: 512,
// //     zoomOffset: -1,
// //     accessToken: 'pk.eyJ1IjoiaWFtYXNxIiwiYSI6ImNrc296bmRvaDAxMGkydnBsNGcwMzQwdGcifQ.PkRl94Sjs9H2IM0auw-zdg'
// // }).addTo(mymap);

// var marker = L.marker([51.5, -0.09]).addTo(mymap);

// marker.bindPopup("<b>Hello world!</b><br>I am a popup.")
