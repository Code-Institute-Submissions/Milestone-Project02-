//conact page general map added:

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: { lat: -16.5004, lng: -151.7415 },
  });
}

// example below for mentor

var map1, map2;
function drawMap() {
  var mapOptions = {
    zoom: 13,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    mapTypeControl: true,
    fullscreenControl: false,
  };
  mapOptions.center = new google.maps.LatLng(51.509865, -0.118092); // London
  map1 = new google.maps.Map(document.getElementById('mapCanvas1'), mapOptions);

  mapOptions.center = new google.maps.LatLng(52.370216, 4.895168); // Amsterdam
  map2 = new google.maps.Map(document.getElementById('mapCanvas2'), mapOptions);
}
