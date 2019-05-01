var fs = require('fs');
var colors = require('colors');
var StatMode = require('stat-mode');

fs.readdir('./', 'utf-8', function(err, files) {
	if (err) throw err;

	var text = '';
	files.forEach((element, index) => {
		console.log(element);
		text += (index > 0 ? '\n' : '') + element;
	});

	fs.writeFile('./index.txt', text, function(err) {
		if (err) throw err;
	});
});