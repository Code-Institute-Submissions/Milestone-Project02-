//conact page general map added:

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: { lat: -16.5004, lng: -151.7415 },
  });
}

var map1, map2;

function drawMap() {
  var mapCenter = new google.maps.LatLng(-33.865143, 151.2099); // Sydney

  var mapOptions = {
    zoom: 13,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    mapTypeControl: true,
    center: mapCenter,
    fullscreenControl: false,
  };

  // Generate First Map
  map1 = new google.maps.Map(document.getElementById('mapCanvas1'), mapOptions);

  // Generate Second Map
  map2 = new google.maps.Map(document.getElementById('mapCanvas2'), mapOptions);
}
