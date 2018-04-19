'use strict';

const logger = require('./lib/logger');
const fileReader = require('./lib/reader');

const textOne = `${__dirname}/data/textone.txt`;
const textTwo = `${__dirname}/data/texttwwo.txt`;
const textThree = `${__dirname}/data/textthree.txt`;

const files = [textOne, textTwo, textThree];

const asyncArray = (fileArray, currentIndex, callback) => {
  if (currentIndex >= fileArray.length) {
    return callback();
  }
  const currentFilePath = fileArray[currentIndex];
  try {
fileReader.read(textOne, CHARACTERS, (textOne) => {
  printCharacters(textOne);
})
    catch (error) {
      logger.log(logger.ERROR, error);
    }
    return undefined;
  };