const person = {
	name: 'Serhii',
	age: 30,
	greet: function () {
		console.log('Greet');
	},
};

Object.prototype.sayHello = function () {
	console.log('Hello!!!');
};

console.log(person.greet());
console.log(person.sayHello());
