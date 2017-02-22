document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
var yourLatLng;
var resortLatLng;
var directionsService=new google.maps.DirectionsService();
$(this).ready(init);
function init() {
   watchID=navigator.geolocation.getCurrentPosition(positionOK, positionError);
}
function positionOK(position) {
   yourLat=position.coords.latitude;
   yourLgt=position.coords.longitude;
   resortLat=40.650286;
   resortLng=-74.331874;
   yourLatLng=new google.maps.LatLng(yourLat, yourLgt);
   resortLatLng=new google.maps.LatLng(resortLat, resortLng);
   var mapOptions={
   zoom:11,
   center:yourLatLng,
   mapType:google.maps.MapTypeId.ROADMAP
}
  

var map=new google.maps.Map(document.getElementById("map"), mapOptions);
var myPosition=new google.maps.Marker({position:yourLatLng, map:map});
var resortPosition=new google.maps.Marker({position:resortLatLng, map:map});
directionsDisplay = new google.maps.DirectionsRenderer({
   'map': map,
   'preserveViewport': true,
   'draggable': false
});
directionsDisplay.setPanel(document.getElementById("infomap"));
google.maps.event.addListener(directionsDisplay, 'directions_changed', function() {
   if (currentDirections) {
      oldDirections.push(currentDirections);
      setUndoDisabled(false);
   }
   currentDirections = directionsDisplay.getDirections();
});
setUndoDisabled(false);
percorso();
}
function setUndoDisabled(value) {
   // do something;
}
function percorso() {
   var start = yourLatLng;
   var end = resortLatLng;
   var request = {
               origin:start,
               destination:end,
               travelMode: google.maps.DirectionsTravelMode.DRIVING
             };
   directionsService.route(request, function(response, status) {
          if (status == google.maps.DirectionsStatus.OK) {
              directionsDisplay.setDirections(response);
          }
   })
}
function offlineAppreso() {
   //
}	
function positionError(error) {
   navigator.notification.alert(
    'I can\'t detect your position. Be sure your GPS is active.',  // message
    offlineAppreso,         // callback
    'Warning!',            // title
    'Ok'                  // buttonName
);
}

}
