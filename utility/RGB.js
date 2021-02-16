const readLineSync = require('readline-sync');
const crypto = require('crypto');

function hexConverter(str) {
    let hex = str.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r,g,b) {
    return "#" + hexConverter(r) + hexConverter(g) + hexConverter(b);
}

function hexTorgbConverter(str){
    let r = 0, g = 0, b = 0;

  // 3 digits
  if (str.length == 4) {
    r = "0x" + str[1] + str[1];
    g = "0x" + str[2] + str[2];
    b = "0x" + str[3] + str[3];

  // 6 digits
  } else if (str.length == 7) {
    r = "0x" + str[1] + str[2];
    g = "0x" + str[3] + str[4];
    b = "0x" + str[5] + str[6];
  }
  
  return "rgb("+ +r + "," + +g + "," + +b + ")";
}

function start() {

    const selectedUtilityOption = parseInt(readLineSync.question('Welcome to RGB. Which function would you like to use?\n1. RGB To Hex\n2. Hex To RGB\n'));

    console.log(`You selected ${selectedUtilityOption}`);
    let str = ""
    switch (selectedUtilityOption) {
        case 1:
            let r = readLineSync.question('Please enter red value\n');
            let g = readLineSync.question('Please enter green value\n');
            let b = readLineSync.question('Please enter blue value\n');
            console.log(rgbToHex(r,g,b));
            break;
        case 2:
            str = readLineSync.question('Please enter hex\n');
            console.log(hexTorgbConverter(str));
            break;
        default:
            console.log('Invalid option\n');
            break;
    }
}

module.exports = {
    start
}