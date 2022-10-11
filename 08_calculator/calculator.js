const add = function(...args) {
	let sum = 0;
  for (let value of args) {
    sum += value;
  }
  return sum;
};

const subtract = function(a, b) {
	return +(+a - +b);
};

const sum = function(array) {
  let sum = 0;
  for (let value of array) {
    sum += value;
  }
  return sum;
};

const multiply = function(array) {
  let product = 1;
  for (let value of array) {
    product *= value;
  }
  return product;
};

const power = function(baze, power) {
  let result = 1; 
  for (i = 1; i <= power; i++) {
    result *= baze; 
  }
  return result; 
};

const factorial = function(fact) {
	let result = 1;
  for (let i = 1; i <= fact; i++) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
