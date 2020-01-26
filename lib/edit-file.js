/* eslint-disable no-unused-vars */
'use strict';

const fs = require('fs');
const util = require('util');
// const dataFile  = require('./lib/edit-file.js');

const readerFile = (schema, cb)=>{
  fs.readFile(schema, (err,data)=>{
    console.log(data.toString());
    if(err)cb(err);
    else cb(undefined, data.toString());
  });
};

const editFile = (schema, cb)=>{
  fs.writeFile(schema, (err,data)=>{
    console.log(schema);
    if(err)cb(err);
    else cb(undefined, (jsonData)=>{
      data.film = 'The Godfather',
      data.director ='Francis Ford Coppola',
      data.yearReleased = '1972',
      data.metaScore = '100',
      data.actors = 'Marlon Brando, Al pacino, James Caan',
      data.oscars = '3 Oscars';
    });
  });
};

module.exports = {readerFile,editFile};