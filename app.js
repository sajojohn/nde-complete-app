const log = require('./logger');
const path = require('path');
const os = require('os');
const data = path.parse(__filename);
const fs = require('fs');
// log(data);

// log(os.totalmem());
// log(os.freemem());
// log(os.userInfo());

// log(`up time ${os.uptime()}`);

fs.readdir('./', (err, files) => {
  if (err) log(err);
  else log(files);
});
