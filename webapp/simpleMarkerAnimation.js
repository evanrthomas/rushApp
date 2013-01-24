
var initialize = function () {
  var zbtlat=42.3487341;
  var zbtlong = -71.1237893;
  var myLatlng = new google.maps.LatLng(zbtlat, zbtlong);
  var mapOptions = {
    zoom: 15,
    center: myLatlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  var map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);

  var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'Hello World!'
  });
  animate(myLatlng, map, marker);
};

var animate = function(myLatlng, map, marker) {
  var move = function() {

      myLatlng = new google.maps.LatLng(myLatlng.lat() + .001, myLatlng.lng(), true);
      marker.setPosition(myLatlng);
      console.log(myLatlng.lat());
  };
  var test = function() {
    console.log("hello");
  }
  window.setInterval(move, 1000);
};


var test = function() {
  console.log(myLatlng);
}

