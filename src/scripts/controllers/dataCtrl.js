// reads and controlls the json file, info.json
app.controller('dataCtrl', ['$scope', 'dataServ', 'phoneFilter', function($scope, dataServ, phoneFilter){
	var jsonData = this;


	jsonData.popOver = function(data){
		var person = document.getElementById(data);
		var popup = person.getElementsByClassName('popup')[0];

		popup['classList'].remove('hidden');
	}

	jsonData.close = function(){

		var popups = document.getElementsByClassName('popup');

		for (var i=0; i<popups.length; i++){
			popups[i].className = "popup hidden";
		}
	}

  dataServ.success(function(data) {
		jsonData.data = data;
	});
}]);
