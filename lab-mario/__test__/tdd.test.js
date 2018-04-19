'use strict';

const fileReader = require('../lib/reader');

// ensure reader function rejects errors with invalid file paths

// ensure reader function correctly resolves mapped string data for an array of filepaths

describe('reader.js', () => {
  describe('fileReader.read', () => {
    test('Should return filepath', () => {
      expect(fileReader.read('/data/textone.txt')).toEqual('Correct fileReader');
    });
    test('Should return filepath', () => {
      expect(fileReader.read('/data/texttwo.txt')).toEqual('Correct fileReader');
  });
    test('Should return filepath', () => {
    expect(fileReader.read('/data/texttwo.txt')).toEqual('Correct fileReader')};
    )};
  )};