
const num_rgb = [128,234,78];
const hex = #F1E60E;

//Function to generate the rgb(x, x, x) string
function randomRGB(){
  var r = Math.floor(Math.random() * 255) + 0;
  var g = Math.floor(Math.random() * 255) + 0; 
  var b = Math.floor(Math.random() * 255) + 0;
  return "rgb("+r +", "+g+", "+b +")";
};

// array.sort(function(a, b){
// 	return a - b
// });

function numtohex(num) {
	var hex = num.toString(16);
	console.log('hex:'+hex);
	return hex.length == 1 ? "0" + hex : hex;
}

function rgbtoHex(r, g, b) {
	return "#"+numtohex(r)+numtohex(g)+numtohex(b);
}

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
