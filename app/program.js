var OSinfo = require('../modules/OSinfo');

process.stdin.setEncoding('utf-8');
process.stdout.write('Test: ');
process.stdin.on('readable', function() {
    var input = process.stdin.read();
    if (input !== null) {
        var instruction = input.toString().trim();

		switch (instruction) {
			case '/exit':
				process.stdout.write('Quitting app!\n');
				process.exit();
				break;
			case '/lang':
				process.stdout.write(process.env.lang || process.env.LANG);
				break;
			case '/node':
				process.stdout.write(process.versions.node);
				break;
			case '/getOSinfo':
				OSinfo.print();
				break;
			default:
				process.stderr.write('Wrong instruction!');
				break;
		}
    }
});
