function format(uptime) {
	var hour = (uptime / 3600).toFixed(0);
	var remaining = uptime % 3600;
	var min = (remaining / 60).toFixed(0);
	var sec = remaining % 60;

	return hour + ' hours ' + min + ' min ' + sec + ' sec';
}

exports.format = format;