const readLineSync = require('readline-sync');
const encoder  = require('./utility/urlEncoder.js');
const base64Converter  = require('./utility/base64Converter.js');
const hashing  = require('./utility/stringHashing.js');
const numberConverter  = require('./utility/numberConverter.js');

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
    case 4:
      numberConverter.start();
      break;

    default:
      break;
  }
}

const selectapp = readLineSync.question('Select the app you want to use\n1. urlEnode\n2. base64Converter\n3. stringHashing\n4. Number Converter\n');
startapp(parseInt(selectapp));
