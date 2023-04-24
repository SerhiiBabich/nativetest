function add(a, b) {
	if (!a) {
		return add;
	}
	if (!b) {
		return function calc(c) {
			if (!c) return calc;
			return a + c;
		};
	}

	return a + b;
}

function f(arg) {
	var value = arg;

	return function (arg) {
		if (arg !== undefined) {
			return f(value + arg);
		} else {
			return value;
		}
	};
}

add(20, 22); // -> 42
add(20)(22); // -> 42
add(20)()(22); // -> 42
add(20)()()()(22); // -> 42
add(20)()()()()()()()()()()()(22); // -> 42
add()(20)(22); // -> 42
add()()()()(20)(22); // -> 42
add()(20)()(22); // -> 42
add()()()()()(20)()()()(22); // -> 42
