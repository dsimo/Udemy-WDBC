function isEven(num){
	return num % 2 === 0;
}

console.log(isEven(4));
console.log(isEven(21));
console.log(isEven(68));
console.log(isEven(333));
////////////////////////////////////////////////////////
function factorial(num){
	var result = 1;

	for (i = 2; i<=num; i++)
	{
		result *= i;
	}

	return result;
}

console.log(factorial(5));
console.log(factorial(2));
console.log(factorial(10));
console.log(factorial(0));
///////////////////////////////////////////////////
function kebabToSnake(kebab){
	return kebab.replace("-", "_");
}

console.log(kebabToSnake("hello-world"));
console.log(kebabToSnake("dogs-are-awesome"));
console.log(kebabToSnake("blah"));
