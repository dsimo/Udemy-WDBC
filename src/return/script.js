
function capitizlize(str){
	if(typeof str === "number"){
		return "that's not a string";
	}
	return str.charAt(0).toUpperCase() + str.slice(1);
}

var city = "paris";
var capital = capitizlize(city);
console.log(capital);

var num = 37
var capital = capitizlize(num);
console.log(capital);