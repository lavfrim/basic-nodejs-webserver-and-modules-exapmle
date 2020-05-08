const os = require('os');

console.log('Operating system:', os.platform());

console.log('Processor architecture:', os.arch());

console.log('Processors info:', os.cpus());

console.log('Free memory:', os.freemem());

console.log('Memory:', os.totalmem());

console.log('Home dir:', os.homedir());

console.log('time on:', os.uptime());