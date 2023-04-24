Number.prototype.plus = function (value) {
	return this + value;
};

Number.prototype.minus = function (value) {
	return this - value;
};

console.log((2).plus(3).minus(1)); // 4

String.prototype.translate = function () {
	return {
		hello: 'Привет',
		green: 'Зеленый',
	}[this];
};

console.log(hello.translate());
