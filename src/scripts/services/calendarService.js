app.factory('calendarServ', ['$http', function($http) {
  var today = (new Date()).toISOString();
  var APIKEY = "AIzaSyDtk9bOYs6qOGL-jILsBMZVm2jlX9x9ats";
  var CALID = "110sbm0g29jdkjmkgkb631s6jk@group.calendar.google.com";
  // var url = "https://www.googleapis.com/calendar/v3/calendars/scumbuilding%40gmail.com/events?timeMin=" + today + "&singleEvents=true&orderBy=startTime&key=" + APIKEY;
  var url = "https://www.googleapis.com/calendar/v3/calendars/" + CALID + "/events?timeMin=" + today + "&singleEvents=true&orderBy=startTime&key=" + APIKEY;


  return $http.get(url)
    .success(function(data) {
      return data;
    })
    .error(function(err) {
      console.log(err);
      return err;
    });
}]);