'use strict';

const logger = require('../lib/logger');
const fileReader = require('../lib/reader');

const textOne = `${__dirname}/data/textone.txt`;
const textTwo = `${__dirname}/data/texttwwo.txt`;
const textThree = `${__dirname}/data/textthree.txt`;

const files = [textOne, textTwo, textThree];
const arr = [];

const asyncArray = (fileArray, currentIndex, callback) => {
  if (currentIndex >= fileArray.length) {
    return callback();
  }
  const currentFilePath = fileArray[currentIndex];
  try {
    return fileReader(currentFilePath, (error, data) => {
      if (error) {
        logger.log(logger.ERROR, error);
      }
      arr.push(data);
      asyncArray(fileArray, currentIndex + 1, callback);
    });
  } catch (error) {
    logger.log(logger.ERROR, error);
  }
  return undefined;
};

asyncArray(files, 0, () => {
  logger.log(logger.INFO, 'Text mapped to arrray');
  logger.log(logger.INFO, arr);
  return arr;
});
