// phoneFilter
app.filter('phoneFilter', function(){

	function isNum(char){
		var nums = "1234567890";
		return nums.indexOf(char) > -1;
	}

	return function(input){
		if (input !== undefined) {
			var output = input.toString().split('').filter(function(char){
				return isNum(char);
			}).join('');

			return "(" + output.slice(0,3) + ") " + output.slice(3,6) + "-" + output.slice(6);
		}
	}
});