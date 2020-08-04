function mapmymap(){
var mymap = L.map('mapid').setView([41.85, -87.629], 13);

L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=VDIHhuomPjQ7XS5k8MrK', {
attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',

id: 'mapbox/streets-v11',
tileSize: 512,
zoomOffset: -1,
center : [0,0],
}).addTo(mymap);

var marker = L.marker([41.8781, -87.6298]).addTo(mymap);

marker.bindPopup("<b>aVcon iNternational</b> <br>Sandeepan(Sunny) Datta <br> 123 W Madison Street, Suite #100 <br> Ph:+1 (123)-456-7890<br> Email:sunny@avcon.com").openPopup();
};


