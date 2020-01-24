'use strict';

jest.mock('fs');

const reader = require('../lib/edit-file');

describe('file reader module as callback',()=>{
  let file =`${__dirname}/data/person.json`;
  it('when given a bad file, return an error',()=>{
    reader.readerFile(file,(err,data)=>{
      expect(err).toBe(undefined);
    });
  });
  it('when given the same file, return content',()=>{
    reader.readerFile(file,(err,data)=>{
      expect(typeof data).toBe('string');
    });
  });
});
describe('file write module as callback',()=>{
  it('when given the same file, return content',()=>{
    let file =`${__dirname}/data/person.json`;
    reader.editFile(file,(err,data)=>{
      // console.log(data)
      expect(typeof data).toBe('string');
    });
  });
});