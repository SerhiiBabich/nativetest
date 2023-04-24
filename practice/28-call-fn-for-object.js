function f() {
	console.log(this.x);
}
var obj = { x: 'bar' };

f.call(obj, a, b);
f.apply(obj, [a, b]);

obj.funk = function f() { console.log(this.x); }
obj.funk();

function f() { console.log(this.x); }.bind(obj, a, b);
f();