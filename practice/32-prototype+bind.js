function Bomb(message, delay) {
	this.message = message;

	setTimeout(this.blowUp.bind(this), delay * 1000); // взрываем через delay sec
}

Bomb.prototype.blowUp = function () {
	console.log(this.message);
};

new Bomb('Explosion!', 0.5);
