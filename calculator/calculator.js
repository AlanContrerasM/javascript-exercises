function add (...args) {
	let result = 0;
	args.forEach(element => {
		result += element;
	});
	return result
}

function subtract (one, two) {

	return one - two;
}

function sum (arr) {
	let result = 0;
	arr.forEach(element => {
		result += element;
	});
	return result
}

function multiply (arr) {
	let result = 1;
	arr.forEach(element => {
		result *= element;
	});
	return result
}

function power(one, two) {
	return Math.pow(one,two);
}

function factorial(num) {
	let result = 1;
	if(num <=0){
		return result;
	}else{
		for(let i = 1; i <=num; i++){
			result*=i;
		}
		return result;
	}
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}