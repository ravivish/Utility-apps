const readLineSync = require('readline-sync');
const encoder  = require('./urlEncoder.js');
const base64Converter  = require('./base64Converter.js');
const hashing  = require('./stringHashing.js');

const startapp = (index) => {
  switch (index) {
    case 1:
      encoder.start();
      break;
    case 2:
      base64Converter.start();
      break;
    case 3:
      hashing.start();
      break;

    default:
      break;
  }
}

const selectapp = readLineSync.question('Select the app you want to use\n1. urlEnode\n2. base64Converter\n3. stringHashing\n');
startapp(parseInt(selectapp));
