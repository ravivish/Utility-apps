const readLineSync = require('readline-sync');


function encode(str) {
    return Buffer.from(str).toString('base64');
}

function decode(str) {
    return Buffer.from(str, 'base64').toString();
}

function start() {

    const selectedUtilityOption = parseInt(readLineSync.question('Welcome to Base64 Encoder/Decoder. Which utility function would you like to use?\n1. base64Encoder\n2. base64Decoder\n'));

    console.log(`You selected ${selectedUtilityOption}`);

    switch (selectedUtilityOption) {
        case 1:
            const strToEncode = readLineSync.question('Please enter the url to be encoded\n');
            const encodedStr = encode(strToEncode);
            console.log(encodedStr);
            break;
        case 2:
            const strToDecode = readLineSync.question('Please enter the url to be decoded\n');
            const decodedStr = decode(strToDecode);
            console.log(decodedStr);
            break;
        default:
            console.log('Invalid string\n');
            break;
    }
}

module.exports = {
    start
}