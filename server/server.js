var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var pollSchema = mongoose.Schema({
	name: String,
	question: String,
	options: [{name: String, yes: Number, no: Number}]
});

var Poll = mongoose.model("Poll", pollSchema);
mongoose.connect('mongodb://mrskeltal:doot@ds027819.mlab.com:27819/heroku_xs7jpvm0');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('www'));

app.route('/polls')
  .get(function(req, res) {
    Poll.find(function(err, polls) {
      if (err){
        res.status(500).send(err);
      }
      res.send(polls);
    });
  })

  .post(function(req, res) {
    var poll = new Poll();
    poll.name = req.body.name;
    poll.question = req.body.question;
    poll.options = [];
    for (i = 0; i < req.body.options.length; i++) {
      poll.options.push({
        name: req.body.options[i],
			  yes: 0,
			  no: 0,
      });
    }
    poll.save(function(err, poll) {
			if (err){
				res.status(500).send(err);
			}
		  res.json(poll);
    });
  });

app.route('/polls/:id')
	.get(function(req, res) {
		Poll.findById(req.params.id, function(err, poll) {
			if (err) {
				res.status(500).send(err);
			}
			res.json(poll);
		});
	});

app.listen(3000, function() {
  console.log('App listening!');
});
