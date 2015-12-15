// reads and controlls the json file, info.json
app.controller('dataCtrl', ['$scope', 'dataServ', function($scope, dataServ){
	var jsonData = this;

	jsonData.visible = {
		staff: false,
		theology: false
	}

	jsonData.toggleVis = function(sectionName){
		console.log(jsonData.visible[sectionName]);
		jsonData.visible[sectionName] === true ? jsonData.visible[sectionName] = false : jsonData.visible[sectionName] = true;
	}

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