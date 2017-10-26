class Client {
	constructor(name, email) {
		this.name = name;
		this.email = email;
	}
}

var bob = {
	_name: 'Bob',
	_friends: ['Marley','John','Shirley'],
	printFriends: function printFriends() {
		var self = this;
		this._friends.forEach(function(f) {
			return console.log(self._name + ' knows ' + f);
		});
	}
}
bob.printFriends();

var color = () => console.log('red');
color();

var peter = {
	_name: 'Peter',
	_friends: ['Marley','John','Shirley'],
	printFriends: function printFriends() {
		this._friends.forEach(f => console.log(this._name + ' knows ' + f) );
	}
}
peter.printFriends();

// Classes
class Color {
	constructor(codeColor, nameColor) {
		this.codeColor = codeColor;
		this.nameColor = nameColor;
	}
	getColor() {
		return {codeColor: this.codeColor, nameColor: this.nameColor};
	}
}
var color = new Color('red', 'Red');
console.log(color.getColor());