const EventEmitter = require('events');
const myEmitter = new EventEmitter();

const logDbConnection = () => {
	console.log('DB connected');
};

myEmitter.addListener('connected', logDbConnection);
myEmitter.emit('connected');
myEmitter.removeListener('connected', logDbConnection);
// myEmitter.off('connected', logDbConnection);
// myEmitter.removeAllListeners('connected');
myEmitter.emit('connected');

myEmitter.on('msg', (data) => {
	console.log(`Get: ${data}`);
});
myEmitter.prependListener('msg', (data) => console.log('MSG: prepend'));
myEmitter.emit('msg', 'Hello, Moto');

myEmitter.once('off', () => console.log('OFF Get'));
myEmitter.emit('off');
myEmitter.emit('off');

console.log(myEmitter.getMaxListeners());
myEmitter.setMaxListeners(1);
console.log(myEmitter.listenerCount('msg'));
console.log(myEmitter.listenerCount('off'));
console.log(myEmitter.eventNames());
