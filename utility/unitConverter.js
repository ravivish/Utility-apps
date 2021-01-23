const readLineSync = require('readline-sync');


function feetToMeter(num) {
    return num/3.2808;
}

function feetToInch(num) {
    return num*12;
}
function meterToFeet(num) {
    return num*3.2808;
}

function inchToFeet(num) {
    return num/39.370;
}

function start() {

    const selectedUtilityOption = parseInt(readLineSync.question('Welcome to Unit Converter. Which utility function would you like to use?\n1. Feet To Meter\n2. Feet To Inch\n3. Meter To Feet\n4. Inch To Feet\n'));

    console.log(`You selected ${selectedUtilityOption}`);
    let n ;
    switch (selectedUtilityOption) {
        case 1:
            n = parseInt(readLineSync.question('Please enter value in feet to convert into meter\n'));
            console.log(feetToMeter(n));
            break;
        case 2:
            n = parseInt(readLineSync.question('Please enter value in feet to convert into inch\n'));
            console.log(feetToInch(n));
            break;
        case 3:
            n = parseInt(readLineSync.question('Please enter value in meter to convert into feet\n'));
            console.log(meterToFeet(n));
            break;
        case 4:
            n = parseInt(readLineSync.question('Please enter the url to be decoded\n'));
            console.log(inchToFeet(n));
            break;
        default:
            console.log('Invalid URL\n');
            break;
    }

}

module.exports = {
    start
}