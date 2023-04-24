// function removeDuplicates(str) {
// 	const res = [];
// 	const map = {};

// 	for (let i = 0; i < str.length; i++) {
// 		const char = str[i];
// 		if (!map[char]) {
// 			map[char] = true;
// 			res.push(char);
// 		}

// 		map[char] = true;
// 	}

// 	return res.join('');
// }

function removeDuplicates(str) {
	return Array.from(new Set(str)).join('');
}

console.log(removeDuplicates('qwe')); // qwe
console.log(removeDuplicates('qweqweqwe')); // qwe
console.log(removeDuplicates('qweqweqwetest')); // qwets
