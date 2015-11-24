// reads and controlls the json file, info.json
app.controller('dataCtrl', ['$scope', 'dataServ', function($scope, dataServ){
	var jsonData = this;


	jsonData.popOver = function(data){
		var person = document.getElementById(data);
		var popup = person.getElementsByClassName('popup')[0];

		popup['classList'].remove('hidden');
	}

  dataServ.success(function(data) {
		jsonData.data = data;
	});
}]);
