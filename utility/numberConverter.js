const readLineSync = require('readline-sync');


function binaryToDecimal(num) {
    return parseInt(num, 2).toString(10);
}
function decimalToBinary(num) {
    return num.toString(2);
}
function binaryToHexadecimal(num) {
    return parseInt(num, 2).toString(16);
}
function hexadecimalToBinary(num) {
    return parseInt(num, 16).toString(2);
}
function binaryToOctal(num) {
    return parseInt(num, 2).toString(8);
}
function octalToBinary(num) {
    return parseInt(num, 8).toString(2);
}
function decimalToOctal(num) {
    return parseInt(num, 10).toString(8);
}
function octalToDecimal(num) {
    return parseInt(num, 8).toString(10);
}

const options = [
    {
        name: 'Binary To Decimal',
        converts: binaryToDecimal
    },
    {
        name: 'Decimal To Binary',
        converts: decimalToBinary
    },
    {
        name: 'Binary to Hexadecimal',
        converts: binaryToHexadecimal
    },
    {
        name: 'Hexadecimal to Binary',
        converts: hexadecimalToBinary
    },
    {
        name: 'Binary To Octal',
        converts: binaryToOctal
    },
    {
        name: 'Octal To Binary',
        converts: octalToBinary
    },
    {
        name: 'Decimal To Octal',
        converts: decimalToOctal
    },
    {
        name: 'Octal To Decimal',
        converts: octalToDecimal
    }
]

function start() {
    console.log(`\nWelcome to number converter. Which utility function would you like to use?`);
    try {
        for (let i = 0; i < options.length; i++) {
            console.log(`${i + 1}. ${options[i].name}`);
        }
        let userinput;
        const useroption = parseInt(readLineSync.question('Select any one option metioned above\n'));
        if (useroption >= 1 && useroption <= options.length + 1){
            userinput = readLineSync.question('Enter a number\n');
            console.log(options[useroption-1].converts(userinput));
        }
    } catch (e) {
        console.log('Not a valid option');
    }

}

module.exports = {
    start
}

// function start() {

//     const selectedUtilityOption = parseInt(readLineSync.question(`Welcome to number converter. Which utility function would you like to use?\n
// 1. BinaryToDecimal
// 2. DecimalToBinary
// 3. BinaryToHexadecimal
// 4. HexadecimalToBinary
// 5. BinaryToOctal
// 6. OctalToBinary
// 7. DecimalToOctal
// 8. OctalToDecimal\n`));

//     console.log(`You selected ${selectedUtilityOption}`);

//     let num ='';
//     let ans ='';
//     switch (selectedUtilityOption) {
//         case 1:
//             num = parseInt(readLineSync.question('Please enter binary number to convert decimal\n'));
//             ans = binaryToDecimal(num);
//             console.log(ans);
//             break;
//         case 2:
//             num = parseInt(readLineSync.question('Please enter decimal number to convert to binary\n'));
//             ans = decimalToBinary(num);
//             console.log(ans);
//             break;
//         case 3:
//             num = parseInt(readLineSync.question('Please enter binary number to convert to hexadecimal\n'));
//             ans = binaryToHexadecimal(num);
//             console.log(ans.toUpperCase());
//             break;
//         case 4:
//             num = readLineSync.question('Please enter hexadecimal number to convert to binary\n');
//             ans = hexadecimalToBinary(num);
//             console.log(ans);
//             break;
//         case 5:
//             num = parseInt(readLineSync.question('Please enter binary number to convert to octal\n'));
//             ans = binaryToOctal(num);
//             console.log(ans);
//             break;
//         case 6:
//             num = parseInt(readLineSync.question('Please enter octal number to convert to binary\n'));
//             ans = octalToBinary(num);
//             console.log(ans);
//             break;
//         case 7:
//             num = parseInt(readLineSync.question('Please enter decimal number to convert to octal\n'));
//             ans = decimalToOctal(num);
//             console.log(ans);
//             break;
//         case 8:
//             num = parseInt(readLineSync.question('Please enter octal number to convert to decimal\n'));
//             ans = octalToDecimal(num);
//             console.log(ans);
//             break;
//         default:
//             console.log('Invalid option\n');
//             break;
//     }
// }

