
var mymap = L.map('mapid').setView([51.505, -0.09], 2)

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
  maxZoom: 18,
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
        '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  id: 'mapbox.streets'
}).addTo(mymap)

let itenary = [
  {
    name: 'Russia',
    lattitude: 61.5240,
    longnitude: 105.3188

  },

  {
    name: 'UK',
    lattitude: 51.5074,
    longnitude: 0.1278
  },

  {
    name: 'Egypt',
    lattitude: 26.8206,
    longnitude: 30.8025

  },

  {
    name: 'France',
    lattitude: 48.8566,
    longnitude: 2.3522
  }
]

// let marker = L.marker([51.5, -0.09]).addTo(mymap)

let markers = []

for (index in itenary) {
  let ul = document.getElementById('dynamic-list')
  let li = document.createElement('li')
  li.className = 'list-group-item'
  li.appendChild(document.createTextNode(itenary[index].name))
  ul.appendChild(li)
}

// let marker = L.marker([55, 22]).addTo(mymap)
// markers.push(marker)
