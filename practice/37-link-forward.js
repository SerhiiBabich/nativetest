const data = [
	{ from: 'site.com/checkout2', to: 'site.com/checkout3' },
	{ from: 'site.com/checkout', to: 'site.com/checkout2' },
	{ from: 'site.com/checkout3', to: 'site.com/end' },
	{ from: 'site.com/catalog', to: 'site.com/product1' },
	{ from: 'site.com/login', to: 'site.com/catalog' },
	{ from: 'site.com/product1', to: 'site.com/checkout' },
];

const nextLinks = [];
const nextData = {};
for (let i = 0; i < data.length; i++) {
	nextLinks.push(data[i].to);
	nextData[data[i].from] = data[i].to;
}

let top = data.find((forw) => !nextLinks.includes(forw.from)).from;
const links = [top];

for (let i = 0; i < data.length; i++) {
	links.push(nextData[top]);
	top = nextData[top];
}

console.log(links);
