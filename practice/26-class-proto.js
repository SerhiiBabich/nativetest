function Book(name, author) {
	this.name = name;
	this.author = author;
	return this;
}

function Foo(Cclass, name, author) {
	return Cclass.call({}, name, author);
}

var book = Foo(Book, 'js', 'petr');
console.log(book.name);
