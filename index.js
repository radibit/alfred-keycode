'use strict';

const alfy = require('alfy');
const alfredNotifier = require('alfred-notifier');

alfredNotifier();

const keyCodes = [
	{
		title: 8,
		subtitle: 'backspace'
	},
	{
		title: 9,
		subtitle: 'tab'
	},
	{
		title: 13,
		subtitle: 'enter'
	},
	{
		title: 16,
		subtitle: 'shift'
	},
	{
		title: 17,
		subtitle: 'ctrl'
	},
	{
		title: 18,
		subtitle: 'alt'
	},
	{
		title: 19,
		subtitle: 'pause/break'
	},
	{
		title: 20,
		subtitle: 'caps lock'
	},
	{
		title: 27,
		subtitle: 'esc'
	},
	{
		title: 32,
		subtitle: 'space'
	},
	{
		title: 33,
		subtitle: 'page up'
	},
	{
		title: 34,
		subtitle: 'page down'
	},
	{
		title: 35,
		subtitle: 'end'
	},
	{
		title: 36,
		subtitle: 'home'
	},
	{
		title: 37,
		subtitle: 'left'
	},
	{
		title: 38,
		subtitle: 'up'
	},
	{
		title: 39,
		subtitle: 'right'
	},
	{
		title: 40,
		subtitle: 'down'
	},
	{
		title: 45,
		subtitle: 'insert'
	},
	{
		title: 46,
		subtitle: 'delete'
	},
	{
		title: 48,
		subtitle: '0'
	},
	{
		title: 49,
		subtitle: '1'
	},
	{
		title: 50,
		subtitle: '2'
	},
	{
		title: 51,
		subtitle: '3'
	},
	{
		title: 52,
		subtitle: '4'
	},
	{
		title: 53,
		subtitle: '5'
	},
	{
		title: 54,
		subtitle: '6'
	},
	{
		title: 55,
		subtitle: '7'
	},
	{
		title: 56,
		subtitle: '8'
	},
	{
		title: 57,
		subtitle: '9'
	},
	{
		title: 58,
		subtitle: ':'
	},
	{
		title: 60,
		subtitle: '<'
	},
	{
		title: 63,
		subtitle: 'ß'
	},
	{
		title: 65,
		subtitle: 'a'
	},
	{
		title: 66,
		subtitle: 'b'
	},
	{
		title: 67,
		subtitle: 'c'
	},
	{
		title: 68,
		subtitle: 'd'
	},
	{
		title: 69,
		subtitle: 'e'
	},
	{
		title: 70,
		subtitle: 'f'
	},
	{
		title: 71,
		subtitle: 'g'
	},
	{
		title: 72,
		subtitle: 'h'
	},
	{
		title: 73,
		subtitle: 'i'
	},
	{
		title: 74,
		subtitle: 'j'
	},
	{
		title: 75,
		subtitle: 'k'
	},
	{
		title: 76,
		subtitle: 'l'
	},
	{
		title: 77,
		subtitle: 'm'
	},
	{
		title: 78,
		subtitle: 'n'
	},
	{
		title: 79,
		subtitle: 'o'
	},
	{
		title: 80,
		subtitle: 'p'
	},
	{
		title: 81,
		subtitle: 'q'
	},
	{
		title: 82,
		subtitle: 'r'
	},
	{
		title: 83,
		subtitle: 's'
	},
	{
		title: 84,
		subtitle: 't'
	},
	{
		title: 85,
		subtitle: 'u'
	},
	{
		title: 86,
		subtitle: 'v'
	},
	{
		title: 87,
		subtitle: 'w'
	},
	{
		title: 88,
		subtitle: 'x'
	},
	{
		title: 89,
		subtitle: 'y'
	},
	{
		title: 90,
		subtitle: 'z'
	},
	{
		title: 91,
		subtitle: 'cmd'
	},
	{
		title: 91,
		subtitle: 'left cmd'
	},
	{
		title: 93,
		subtitle: 'right cmd'
	},
	{
		title: 106,
		subtitle: 'multiply'
	},
	{
		title: 107,
		subtitle: 'add'
	},
	{
		title: 109,
		subtitle: 'subtract'
	},
	{
		title: 110,
		subtitle: '.'
	},
	{
		title: 111,
		subtitle: 'divide'
	},
	{
		title: 144,
		subtitle: 'num lock'
	},
	{
		title: 145,
		subtitle: 'scroll lock'
	},
	{
		title: 160,
		subtitle: '^'
	},
	{
		title: 161,
		subtitle: '!'
	},
	{
		title: 163,
		subtitle: '#'
	},
	{
		title: 164,
		subtitle: '$'
	},
	{
		title: 165,
		subtitle: 'ù'
	},
	{
		title: 186,
		subtitle: ';'
	},
	{
		title: 187,
		subtitle: '='
	},
	{
		title: 188,
		subtitle: ','
	},
	{
		title: 189,
		subtitle: '-'
	},
	{
		title: 190,
		subtitle: '.'
	},
	{
		title: 191,
		subtitle: '/'
	},
	{
		title: 192,
		subtitle: '`'
	},
	{
		title: 219,
		subtitle: '['
	},
	{
		title: 220,
		subtitle: '\\'
	},
	{
		title: 221,
		subtitle: ']'
	},
	{
		title: 222,
		subtitle: '\''
	}
];

alfy.output(alfy.matches(alfy.input, keyCodes, (item, input) => item.subtitle === input));
