function getStr() {
	return [].slice.call(arguments, 1).join(arguments[0]);
}

console.log('*', '1', 'b', '1c'); //  '1*b*1c'
