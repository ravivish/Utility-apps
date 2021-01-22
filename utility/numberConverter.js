const readLineSync = require('readline-sync');


function DecimalToBinary(num) {
    // return num.toString(2);
}
function BinaryToDecimal(num) {
    return num.toString(10);
}
function BinaryToHexadecimal(num) {
    return ;
}
function HexadecimalToBinary(num) {
    return ;
}
function BinaryToOctal(num) {
    return ;
}
function OctalToBinary(num) {
    return ;
}
function DecimalToOctal(num) {
    return ;
}
function OctalToDecimal(num) {
    return ;
}

function start() {

    const selectedUtilityOption = parseInt(readLineSync.question(`Welcome to number converter. Which utility function would you like to use?\n1. BinaryToDecimal\n
                                                                    2. DecimalToBinary\n
                                                                    3. BinaryToHexadecimal\n
                                                                    4. HexadecimalToBinary\n
                                                                    5. BinaryToOctal\n
                                                                    6. OctalToBinary\n`));

    console.log(`You selected ${selectedUtilityOption}`);

    let num=0
    let ans=0
    switch (selectedUtilityOption) {
        case 1:
            num = parseInt(readLineSync.question('Please enter binary number to convert decimal\n'));
            ans = BinaryToDecimal(num);
            console.log(ans);
            break;
        case 2:
            num = parseInt(readLineSync.question('Please enter decimal number to convert to binary\n'));
            ans = DecimalToBinary(num);
            console.log(ans);
            break;
        default:
            console.log('Invalid option\n');
            break;
    }
}

module.exports = {
    start
}