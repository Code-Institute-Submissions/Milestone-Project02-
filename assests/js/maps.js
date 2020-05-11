//conact page general map added:

var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: -16.5004, lng: -151.7415 },
    zoom: 12,
  });
}
