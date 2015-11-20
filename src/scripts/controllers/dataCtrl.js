app.controller('dataCtrl', ['$scope', 'dataServ', function($scope, dataServ){
	var jsonData = this;

  dataServ.success(function(data) {
  	//console.log(data.staff);
		jsonData.data = data;
	});
}]);

