
const array = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];

array.sort(function(a, b){
	return a - b
});

function group_array(array) {
	var new_array = [];
	var new_item = 0;
	var item = 0;
	while (item < array.length) {
		// console.log(array[item]);
		let sub_item = 0;
		if (array[item] == array[item+1]) {
			// console.log(' '+array[item]);
			new_array[new_item] = [];
			while (array[item] == array[item+1]) {
				new_array[new_item][sub_item] = array[item];
				console.log('  '+array[item]);
				++sub_item;
				++item;
			};
			console.log(new_item+sub_item+'l '+array[item]);
			new_array[new_item][sub_item] = array[item];
		} else {
			console.log(new_item+array[item]);
			new_array[new_item] = array[item];
		};
		++new_item;
		++item;
	};
	return new_array;
};

group_array(array);
