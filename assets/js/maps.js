//conact page general map added:

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: { lat: -16.5004, lng: -151.7415 },
  });
}

//Lagoon Resturant, first map in Experinceces

var map;
var service;
var infowindow;

function initMap() {
  var lagoon = new google.maps.LatLng(-16.486524, -151.633152);

  lagoon = new google.maps.Map(document.getElementById('map'), {
    center: lagoon,
    zoom: 15,
  });

  var request = {
    query: 'Museum of Contemporary Art Australia',
    fields: ['name', 'geometry'],
  };

  service = new google.maps.places.PlacesService(map);

  service.findPlaceFromQuery(request, function (results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      for (var i = 0; i < results.length; i++) {
        createMarker(results[i]);
      }

      map.setCenter(results[0].geometry.location);
    }
  });
}

function createMarker(place) {
  var marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location,
  });

  google.maps.event.addListener(marker, 'click', function () {
    infowindow.setContent(place.name);
    infowindow.open(map, this);
  });
}

//Resturant St.James, first map in Experinceces

var map;
var service;
var infowindow;

function initMap() {
  var vaitape = new google.maps.LatLng(-16.499977, -151.752342);

  infowindow = new google.maps.InfoWindow();

  map = new google.maps.Map(document.getElementById('map'), {
    center: vaitape,
    zoom: 15,
  });

  var request = {
    query: 'Restaurant St. James',
    fields: ['name', 'geometry'],
  };

  service = new google.maps.places.PlacesService(map);

  service.findPlaceFromQuery(request, function (results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      for (var i = 0; i < results.length; i++) {
        createMarker(results[i]);
      }

      map.setCenter(results[0].geometry.location);
    }
  });
}

function createMarker(place) {
  var marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location,
  });

  google.maps.event.addListener(marker, 'click', function () {
    infowindow.setContent(place.name);
    infowindow.open(map, this);
  });
}

//Second map in Experinceces

var map;
var service;
var infowindow;

function initMap() {
  var vaitape = new google.maps.LatLng(-16.475781, -151.772474);

  infowindow = new google.maps.InfoWindow();

  map = new google.maps.Map(document.getElementById('pearl resort'), {
    center: vaitape,
    zoom: 15,
  });

  var request = {
    query: ' Pearl Beach Resort',
    fields: ['name', 'geometry'],
  };

  service = new google.maps.places.PlacesService(map);

  service.findPlaceFromQuery(request, function (results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      for (var i = 0; i < results.length; i++) {
        createMarker(results[i]);
      }

      map.setCenter(results[0].geometry.location);
    }
  });
}

function createMarker(place) {
  var marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location,
  });

  google.maps.event.addListener(marker, 'click', function () {
    infowindow.setContent(place.name);
    infowindow.open(map, this);
  });
}

//The Lagoonarium Third map in Experinceces

var map;
var service;
var infowindow;

function initMap() {
  var lagoonarium = new google.maps.LatLng(-16.486202, -151.695067);

  infowindow = new google.maps.InfoWindow();

  map = new google.maps.Map(document.getElementById('map'), {
    center: lagoonarium,
    zoom: 15,
  });

  var request = {
    query: 'Lagoonarium Bora Bora',
    fields: ['name', 'geometry'],
  };

  service = new google.maps.places.PlacesService(map);

  service.findPlaceFromQuery(request, function (results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      for (var i = 0; i < results.length; i++) {
        createMarker(results[i]);
      }

      map.setCenter(results[0].geometry.location);
    }
  });
}

function createMarker(place) {
  var marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location,
  });

  google.maps.event.addListener(marker, 'click', function () {
    infowindow.setContent(place.name);
    infowindow.open(map, this);
  });
}
