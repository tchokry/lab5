var data = require("../data.json");

exports.addFriend = function(req, res) {
	// Your code goes here
    var na = req.query.name;
    var des = req.query.description;
    var img = 'http://lorempixel.com/400/400/people';
    data["friends"].push({name: na, description: des, imageURL: img});
    res.render('add');
}