// reads and controlls the json file, info.json
app.controller('dataCtrl', ['$scope', 'dataServ', function($scope, dataServ){
	var jsonData = this;

	var staff = document.getElementById('staff-container');
	var people = staff.getElementsByClassName('person-container');

	console.log(people.length);
	

  dataServ.success(function(data) {
		jsonData.data = data;
	});
}]);
