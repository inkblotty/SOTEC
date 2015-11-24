// reads and controlls the json file, info.json
app.controller('dataCtrl', ['$scope', 'dataServ', function($scope, dataServ){
	var jsonData = this;

	console.log('yayyy');


	jsonData.popOver = function(){
		var personCont = this.currentTarget;
		console.log(personCont);
	}

  dataServ.success(function(data) {
		jsonData.data = data;
	});
}]);
