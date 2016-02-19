app.factory('calendarServ', ['$http', function($http) {
  var today = (new Date()).toISOString();
  var url = "https://www.googleapis.com/calendar/v3/calendars/scumbuilding%40gmail.com/events?timeMin=" + today + "&singleEvents=true&orderBy=startTime&key=AIzaSyDtk9bOYs6qOGL-jILsBMZVm2jlX9x9ats";
  
  //var url = "https://www.googleapis.com/calendar/v3/users/me/calendarList?key=AIzaSyDtk9bOYs6qOGL-jILsBMZVm2jlX9x9ats";
  // https://www.googleapis.com/calendar/v3/calendars/scumbuilding%40gmail.com/events?timeMin=timeMin=2016-01-28T08:10:18.967Z&singleEvents=true&orderBy=startTime&key=AIzaSyDtk9bOYs6qOGL-jILsBMZVm2jlX9x9ats";

  return $http.get(url)
    .success(function(data) {
      return data;
    })
    .error(function(err) {
      console.log(err);
      return err;
    });
}]);