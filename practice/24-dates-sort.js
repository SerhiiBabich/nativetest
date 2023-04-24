var arr = [
	{ date: '10.01.2017' },
	{ date: '05.11.2016' },
	{ date: '21.13.2002' },
];

arr.forEach(function (item) {
	var arrDate = item.date.split('.'),
		date = new Date(Number(arrDate[2]), Number(arrDate[1]), Number(arrDate[0]));
	item.time = date.getTime();
});

arr.sort(function (a, b) {
	if (a.time - b.time < 0) {
		return false;
	} else {
		return true;
	}
});

var res = arr.map(function (item) {
	return { date: item.date };
});

console.log(res);
