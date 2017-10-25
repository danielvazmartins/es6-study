'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Client = function Client(name, email) {
	_classCallCheck(this, Client);

	this.name = name;
	this.email = email;
};

var bob = {
	_name: 'Bob',
	_friends: ['Marley', 'John', 'Shirley'],
	printFriends: function printFriends() {
		var self = this;
		this._friends.forEach(function (f) {
			return console.log(self._name + ' knows ' + f);
		});
	}
};
bob.printFriends();

var color = function color() {
	return console.log('red');
};
color();

var peter = {
	_name: 'Peter',
	_friends: ['Marley', 'John', 'Shirley'],
	printFriends: function printFriends() {
		var _this = this;

		this._friends.forEach(function (f) {
			return console.log(_this._name + ' knows ' + f);
		});
	}
};
peter.printFriends();
