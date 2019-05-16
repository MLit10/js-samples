
const array = [1,2,3,4,5];
const target = 9;

// array.sort(function(a, b){
// 	return a - b
// });

function group_array(array, target) {
	var num1 = 0;
	var num2 = 0;
	for (item = 0; item < array.length; ++ item) {
		console.log('1 '+array[item]);
		for (s_item = 0; s_item < array.length; ++s_item) {
			console.log('2 '+array[s_item]);
			if (item != s_item) {
				if (array[item] + array[s_item] == target) {
					num1 = array[item];
					num2 = array[s_item];
					return ('n1:'+num1+'n2:'+num2);
					console.log('F');
				}
			}
		}
	}
	
	return ('Not Found');
};

console.log('R '+group_array(array, target));
