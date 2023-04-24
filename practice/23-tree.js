/* var sum = 0;

function getSum(obj) {
	sum += obj.valueNode;
	if (obj.next != null) {
		for (var i = 0; i < obj.next.length; i++) {
			getSum(obj.next[i]);
		}
	}

	return sum;
}
*/
function getSum(obj) {
	var arr = [obj],
		sum = 0,
		current;

	while (arr.length > 0) {
		current = arr.shift();
		sum += current.valueNode;

		if (current.next != null) {
			for (var i = 0; i < current.next.length; i++) {
				arr.push(current.next[i]);
			}
		}
	}

	return sum;
}

var tree = {
	valueNode: 3,
	next: [
		{
			valueNode: 1,
			next: null,
		},
		{
			valueNode: 3,
			next: null,
		},
		{
			valueNode: 2,
			next: null,
		},
		{
			valueNode: 2,
			next: [
				{
					valueNode: 1,
					next: null,
				},
				{
					valueNode: 5,
					next: null,
				},
			],
		},
	],
};
getSum(tree);

/*

function getTreeValues(tree) {
	let values = [ tree.value ];

	if (Array.isArray(tree.children)) {
		tree.children.forEach(item => values = values.concat(getTreeValues(item)));
	}

	return values;
}

function getTreeValues(tree) {
	const tmpTree = [tree];
	const res = [];
	let current;

	while (tmpTree.length > 0) {
		current = tmpTree.shift();
		res.push(current.value);

		if (current.children) {
			current.children.forEach(item => tmpTree.push(item));
		}
	}

	return res
}


function getTreeSum(node) {
	let sum = node.value;

	if (Array.isArray(node.children)) {
		node.children.forEach(item => sum += getTreeSum(item));
	}

	return sum;
}


*/
