console.log(isBalanced('(x + y) - (4)')); // -> true
console.log(isBalanced('(((10 ) ()) ((?)(:)))')); // -> true
console.log(isBalanced('[{()}]')); // -> true
console.log(isBalanced('(50)(')); // -> false
console.log(isBalanced('[{]}')); // -> false

function isBalanced(string) {
	const start = '({[';
	const end = ']})';

	const map = {
		'}': '{',
		')': '(',
		']': '[',
	};

	const queue = [];

	for (let i = 0; i < string.length; i++) {
		const char = string[i];

		if (start.includes(char)) {
			queue.push(char);
		} else if (end.includes(char)) {
			const last = queue.pop();

			if (map[char] !== last) {
				return false;
			}
		}
	}

	return !queue.length;
}

/*

function validBraces(str) {

	var arrOpenSymbols = [],
		result = false,
		countOpenSymbols;
	if (str.length > 0) {
		for (var i = 0; i < str.length; i++) {
			if (str[i] === '{' || str[i] === '[' || str[i] === '(') {
				arrOpenSymbols.push(str[i]);
			} else {
				countOpenSymbols = arrOpenSymbols.length;
				if ((str[i] === '}' && arrOpenSymbols[(countOpenSymbols-1)] === '{') ||
					(str[i] === ']' && arrOpenSymbols[(countOpenSymbols-1)] === '[') ||
					(str[i] === ')' && arrOpenSymbols[(countOpenSymbols-1)] === '(')
					) {
						arrOpenSymbols.pop();
				}
			}
		}

		if (arrOpenSymbols.length === 0) {
			result = true;
		} else {
			result = false;
		}
	}
	return result;
}

*/
