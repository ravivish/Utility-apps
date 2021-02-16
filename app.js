const readLineSync = require('readline-sync');
const encoder = require('./utility/urlEncoder.js');
const base64Converter = require('./utility/base64Converter.js');
const hashing = require('./utility/stringHashing.js');
const numberConverter = require('./utility/numberConverter.js');
const unitConverter = require('./utility/unitConverter.js');
const epocConverter = require('./utility/epocConverter.js');
const rgb = require('./utility/RGB.js');

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
    case 5:
      unitConverter.start();
      break;
    case 6:
      epocConverter.start();
      break;
    case 7:
      rgb.start();
      break;
    default:
      break;
  }
}

const selectapp = readLineSync.question('Select the app you want to use\n1. urlEnode\n2. base64Converter\n3. stringHashing\n4. Number Converter\n5. Unit Converter\n6. Epoch Converter\n7. RGB Converter\n');
startapp(parseInt(selectapp));
