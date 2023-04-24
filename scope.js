// test1
{
	let a = 5;
	let printA;

	{
		let a = 100;
		printA = () => console.log(a);
	}

	printA();
	printA = () => console.log(a);
	printA();
}

// test2
{
	var a = 1;
	var b = 2;
	(function () {
		var a = 100;
	})();
	var b = 200;
	console.log(a, b);
}

// test3
{
	var obj = { num: 2 };

	function add(a, b) {
		return this.num + a + b;
	}

	const resultCall = add.call(obj, 3, 5);
	const resultApply = add.apply(obj, [3, 5]);
	const funcBind = add.bind(obj, 3, 5);
	const resultBind = funcBind();

	obj.add = add;
	const resultBind2 = obj.add(3, 5);

	console.log(resultCall, resultApply, resultBind, resultBind2);
}

// test4
{
	console.log([1, 2, 3].slice(0, 1));
	let slice = Array.prototype.slice;
	console.log(slice.call([1, 2, 3], 0, 1));
	console.log(slice.apply([1, 2, 3], [0, 1]));

	slice = Function.prototype.call.bind(Array.prototype.slice);
	console.log(slice([1, 2, 3], 0, 1));

	let bind = Function.prototype.call.bind(Function.prototype.bind);
	var context = { foo: 'bar' };
	function returnFoo() {
		return this.foo;
	}

	var amazing = bind(returnFoo, context);
	console.log(amazing()); // => bar
}
