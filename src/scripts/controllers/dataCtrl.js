app.controller('dataCtrl', ['$scope', 'dataServ', function($scope, dataServ){
	var jsonData = this;
	jsonData.monkey = "blue";
/*
	dataServ.success(function(data) {
		jsonData.data = data;
	});*/
}]);