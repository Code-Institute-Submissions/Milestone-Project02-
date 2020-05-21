//Contact page

//The Lagoonarium Third map in Experinceces

var map1, map2, map3, map4;
function drawMap() {
  var mapOptions = {
    zoom: 17,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    mapTypeControl: true,
    fullscreenControl: false,
  };
  mapOptions.center = new google.maps.LatLng(-16.499977, -151.752342); // Restaurant St.James, first map in Experinceces
  map1 = new google.maps.Map(document.getElementById('restaurant'), mapOptions);

  mapOptions.center = new google.maps.LatLng(-16.475653, -151.772469); // Bora-Bora Pearl Beach Resort & Spa
  map2 = new google.maps.Map(document.getElementById('spa'), mapOptions);

  mapOptions.center = new google.maps.LatLng(-16.489811, -151.71422); // Bora Bora Lagoonarium
  map3 = new google.maps.Map(document.getElementById('tours'), mapOptions);

  mapOptions.center = new google.maps.LatLng(-16.497441, -151.736411); // Bora Bora
  map4 = new google.maps.Map(document.getElementById('bora'), mapOptions);
}
