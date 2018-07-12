const speedTest = require('speedtest-net');
const moment = require('moment');

const env = process.env;
const config = {
  throttling: parseInt(env.THROTTLING) || 60 * 60 * 1000, // Default to 1h
  logzio: {
    host: env.LOGZIO_HOST || 'listener.logz.io',
    token: env.LOGZIO_TOKEN,
    type: env.LOGZIO_TYPE || 'speedtest'
  }
};

const logger = require('logzio-nodejs').createLogger({
  token: config.logzio.token,
  host: config.logzio.host,
  type: config.logzio.type
});

const run = () => {
  const testTimestamp = moment().format('MMMM Do YYYY, h:mm:ss');
  const test = speedTest({maxTime: 5000});
  test.on('data', data => {
    logger.log({
      success: true,
      result: data
    });
    logger.sendAndClose();
    console.log(testTimestamp + ' | Test Run OK');
  });

  test.on('error', err => {
    logger.false({
      success: false,
      error: err
    });
    logger.sendAndClose();
    console.log(testTimestamp + ' | Test NOT Run OK');
  });

  setTimeout(run, config.throttling);
};

run();
