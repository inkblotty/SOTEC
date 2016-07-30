app.controller('mapCtrl', ['$scope', function($scope){
	// uses ng-maps by will leahy

	var mapper = $scope;

	var styleArray = [
		{
			featureType: 'all',
			stylers: [
				{ saturation: -90 }
			]
		}
	];

	mapper.map = {
		center: [39.7339446, -104.9996545],
		options: function(){
			return {
				streetViewControl: false,
				styles: styleArray,
				scrollwheel:false,
				zoom: 14
			}
		}
	}

	mapper.marker = {
		position: [39.7339446,-104.9996545],
		decimals: 4,
		options: function(){
			return { draggable: true };
		}
	}
}]);