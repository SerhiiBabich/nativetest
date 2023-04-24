// “Pure” functions are another way of describing this rule.
// Pure functions always return the same result, given the same inputs.
// They also don’t have any hidden side effects, meaning they don’t modify their inputs or data outside their function scope.
// A good portion of any application can usually be written this way.

// scope
let COST_OF_ITEM = 200;

const totalPrice = (quantity) => COST_OF_ITEM * quantity;

console.log(totalPrice(2)); // 400
COST_OF_ITEM = 300;
console.log(totalPrice(2)); // NOT 400

// diff result
const generateID = () => Math.floor(Math.random() * 10000);

const createUser = (name, age) => ({
	id: generateID(),
	name,
	age,
});
console.log(createUser('Serhii', 28));
console.log(createUser('Serhii', 28));
console.log(createUser('Serhii', 28));

// change global scope
let id = 0;

const createPerson = (name) => ({
	id: ++id,
	name,
});

console.log(createPerson('Serhii')); // {id: 1, name: "Serhii"}
console.log(createPerson('Serhii2')); // {id: 2, name: "Serhii2"}
console.log(id); // 2

// by-effect
const logger = (msg) => {
	console.log(msg);
};

logger('Всем привет!');
