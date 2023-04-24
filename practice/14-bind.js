Function.prototype.myBind = function (context, ...args) {
	return (...rest) => {
		return this.call(context, ...args.concat(rest));
	};
};

Function.prototype.myBind2 = function (context, ...argsBind) {
	const fn = this;

	return function (...args) {
		return fn.apply(context, argsBind.concat(args));
	};
};

function log(...props) {
	console.log(this.name, this.age, ...props);
}

const obj = { name: 'Vladilen', age: 28 };

log.myBind(obj, 1, 2)();
