let popupVars = {
  minWidth : 560
}

    var myLines =     {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {},
          "geometry": {
            "type": "LineString",
            "coordinates": [
              [
                -79.5223045349121,
                43.64849764944257
              ],
              [
                -79.5223045349121,
                43.644398510559625
              ],
              [
                -79.51251983642578,
                43.643032068770395
              ],
              [
                -79.51080322265624,
                43.640299091949906
              ],
              [
                -79.50925827026367,
                43.64042332086611
              ],
              [
                -79.50822830200195,
                43.63756599080728
              ],
              [
                -79.50445175170898,
                43.633838834350804
              ],
              [
                -79.4996452331543,
                43.63035994642005
              ],
              [
                -79.49329376220703,
                43.6291174376414
              ],
              [
                -79.4912338256836,
                43.628993185350815
              ],
              [
                -79.486083984375,
                43.626508085598594
              ],
              [
                -79.4857406616211,
                43.623898620281366
              ],
              [
                -79.48265075683594,
                43.62215891380659
              ],
              [
                -79.47904586791992,
                43.620916235501824
              ],
              [
                -79.47904586791992,
                43.626508085598594
              ],
              [
                -79.47698593139648,
                43.63023569669808
              ],
              [
                -79.47149276733398,
                43.63359034903413
              ],
              [
                -79.46823120117188,
                43.636199393615314
              ],
              [
                -79.46462631225586,
                43.638684092664846
              ],
              [
                -79.46308135986328,
                43.64042332086611
              ]
            ]
          }
        }
      ]
    }



const points = [
  [-79.5223045349121, 43.64849764944257, 'marker1'],
  [-79.5223045349121, 43.644398510559625, 'marker2'],
  [-79.51251983642578, 43.643032068770395, 'marker3'],
  [-79.51080322265624, 43.640299091949906, 'marker4'],
  [-79.50925827026367, 43.64042332086611, 'marker5'],
  [-79.50822830200195, 43.63756599080728, 'marker6'],
  [-79.50445175170898, 43.633838834350804, 'marker7'],
  [-79.4996452331543, 43.63035994642005, 'marker8'],
  [-79.49329376220703, 43.6291174376414, 'marker9'],
  [-79.4912338256836, 43.628993185350815, 'marker10'],
  [-79.486083984375, 43.626508085598594, 'marker11'],
  [-79.4857406616211, 43.623898620281366, 'marker12'],
  [-79.48265075683594, 43.62215891380659, 'marker13'],
  [-79.47904586791992, 43.620916235501824, 'marker14'],
  [-79.47904586791992, 43.626508085598594, 'marker15'],
  [-79.47698593139648, 43.63023569669808, 'marker16'],
  [-79.47149276733398, 43.63359034903413, 'marker17'],
  [-79.46823120117188, 43.636199393615314, 'marker18'],
  [-79.46462631225586, 43.638684092664846, 'marker19'],
  [-79.46308135986328, 43.64042332086611, 'marker20']
]




const myStyle = {
  "color": "#ff0000",
  "weight": 5,
  "opacity": 0.95
};

var route = L.geoJSON(myLines, {
  style: myStyle
}).bindPopup("<b>Hello world!</b><br>I am a popup. work work workThe federal party leaders held the first of two back-to-back debates on Wednesday — a spirited and occasionally raucous encounter in French that provided glimpses but no sustained view of the differences among them.The federal party leaders held the first of two back-to-back debates on Wednesday — a spirited and occasionally raucous encounter in French that provided glimpses but no sustained view of the differences among them.",popupVars)

var circle = L.circle([43.6403889,-79.4850848], {
  color: '#000',
  fillColor: '#000',
  fillOpacity: 0.75,
  radius: 200
}).bindPopup("<img src='img/gcmta.jpg'>what the fuck is going on? hello hello",popupVars)

let dots = L.layerGroup([circle, route]);
let lines = L.layerGroup([route]);

let allMarkers = [];

for (var i=0; i<points.length; i++) {
           
  var lon = points[i][0];
  var lat = points[i][1];
  var popupText = points[i][2];
  
   var markerLocation = new L.LatLng(lat, lon);
   var marker = new L.Marker(markerLocation);
   

   marker.bindPopup(popupText);

   allMarkers.push(marker)

}

let markers = L.layerGroup(allMarkers);

  var mymap = L.map('mapid', {
    center: [43.6403889,-79.4850848],
    zoom: 13,
    layers: [dots, lines, markers]
});





var overlayMaps = {
  "dots": dots,
  "lines":lines,
  "markers":markers,
};


L.control.layers(overlayMaps).addTo(mymap);

//var mymap = L.map('mapid').setView([], 13);
mymap.accessToken = 'pk.eyJ1IjoiaWFtYXNxIiwiYSI6ImNrc296bmRvaDAxMGkydnBsNGcwMzQwdGcifQ.PkRl94Sjs9H2IM0auw-zdg';




L.tileLayer(
    'https://api.mapbox.com/styles/v1/iamasq/cksp237zq0wc017mg4vxumsw3/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaWFtYXNxIiwiYSI6ImNrc296bmRvaDAxMGkydnBsNGcwMzQwdGcifQ.PkRl94Sjs9H2IM0auw-zdg', {
        tileSize: 512,
        zoomOffset: -1,
        attribution: '© <a href="https://apps.mapbox.com/feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(mymap);



  $(".open-window").click(function(){
    window[$(this).data("open")].openPopup();

  })