// var mongoose = require('mongoose');
// mongoose.connect('mongodb://anindamanocha:database@ds011251.mlab.com:11251/heroku_h50vs0hv');
//
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
//
// poll.methods.calcium = function () {
// 	var greeting = this.options
// 	? this.options
// 	: [];
// 	console.log(greeting);
// }
//
// function make_new_poll(name, question, options) {
// 	var option_objects = [];
// 	for (var index in options) {
// 		option_objects.push({
// 			name: options[index],
// 			yes: 0,
// 			no: 0
// 		});
// 	}
// 	var new_poll = new Poll({name: name, question: question, options: option_objects});
// }
//
// db.once('open', function() {
// 	make_new_poll('Poll','What kind of pizza?', ['pepperoni', 'cheese', 'veggie']);
// });
