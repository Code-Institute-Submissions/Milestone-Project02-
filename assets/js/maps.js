//Restaurant St.James, first map in Experinceces
var map1, map2;
function drawMap() {
  var mapOptions = {
    zoom: 16,
    mapTypeId: google.maps.MapTypeId.PLACESMAP,
    mapTypeControl: true,
    fullscreenControl: false,
  };
  mapOptions.center = new google.maps.LatLng(-16.499977, -151.752342); // London
  map1 = new google.maps.Map(document.getElementById('map1'), mapOptions);

  mapOptions.center = new google.maps.LatLng(52.370216, 4.895168); // Amsterdam
  map2 = new google.maps.Map(document.getElementById('spa'), mapOptions);
}

//The Lagoonarium Third map in Experinceces
