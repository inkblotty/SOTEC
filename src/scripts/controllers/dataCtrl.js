app.controller('dataCtrl', ['$scope', 'dataServ', function($scope, dataServ){
	var jsonData = this;
	jsonData.monkey = "blue"; // this is working

  dataServ.success(function(data) {
  	console.log(data);
		jsonData.data = data;
	});
}]);