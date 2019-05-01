var os = require('os');
var colors = require('colors');
var time = require('./time');

function getOSinfo() {
    var type = os.type();
    if(type === 'Darwin') {
        type = 'OSX';
    } else if(type === 'Windows_NT') {
        type = 'Windows';
    }
    var release = os.release();
    var cpu = os.cpus()[0].model;
    var uptime = os.uptime();
    var userInfo = os.userInfo();
    console.log('System:'.green, type);
    console.log('Release:'.red, release);
    console.log('CPU model:'.blue, cpu);
    console.log('Uptime: ~'.yellow, time.format(uptime));
    console.log('User name:'.rainbow, userInfo.username);
    console.log('Home dir:'.zebra, userInfo.homedir);
}

exports.print = getOSinfo;