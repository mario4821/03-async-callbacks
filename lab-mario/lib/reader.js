'use strict';

const fs = require('fs');
const logger = require('./logger');

const fileReader = module.exports = {};
fileReader.read = (paths, characters, callback) => {
  logger.log(logger.VERBOSE, `Reading ${paths}`);

  fs.readFile(paths, (error, fileBuffer) => {
    if (error) {
      throw error;
    }
    return callback(fileBuffer.toString('utf8', 0, characters));
  });
};
