const readLineSync = require('readline-sync');


function urlEncode(url) {
    return encodeURIComponent(url);
}

function urlDecode(url) {
    return decodeURIComponent(url);
}

function start() {

    const selectedUtilityOption = parseInt(readLineSync.question('Welcome to URL Encoder/Decoder. Which utility function would you like to use?\n1. urlEncode\n2. urlDecode\n'));

    console.log(`You selected ${selectedUtilityOption}`);

    switch (selectedUtilityOption) {
        case 1:
            const urlToEncode = readLineSync.question('Please enter the url to be encoded\n');
            const encodedURL = urlEncode(urlToEncode);
            console.log(encodedURL);
            break;
        case 2:
            const urlToDecode = readLineSync.question('Please enter the url to be decoded\n');
            const decodedURL = urlDecode(urlToDecode);
            console.log(decodedURL);
            break;
        default:
            console.log('Invalid URL\n');
            break;
    }

}

module.exports = {
    start
}