const apiKey = "AIzaSyDv3MGflguusDaLmV_-BUlmuoUI4EbM88w";

let mapOptions = {
    center:[39.480097598859835,-74.79218645011395],
    zoom:10
}
let map = new L.map('map', mapOptions);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var Routes= L.esri.featureLayer({url:'https://services1.arcgis.com/pMeXRvgWClLJZr3s/arcgis/rest/services/Evacuation_Routes/FeatureServer/0/'
}).addTo(map);
