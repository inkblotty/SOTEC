// staff service -- gets json data

app.factory('dataServ', ['$http', function($http) {
	return $http.get('../../info.json')
	.success(function(data) {
		return data;
	})
	.error(function(err) {
		return err;
	});
}]);
