const readLineSync = require('readline-sync');
const crypto = require('crypto');

function md5hashing(str) {
    return crypto.createHash('md5').update(str).digest('hex');
}

function sha_1(str) {
    return crypto.createHash('sha1').update(str).digest('hex');
}
function sha_256(str) {
    return crypto.createHash('sha256').update(str).digest('hex');
}
function sha_512(str) {
    return crypto.createHash('sha512').update(str).digest('hex');
}

function start() {

    const selectedUtilityOption = parseInt(readLineSync.question('Welcome to string hashing. Which hashing function would you like to use?\n1. md5\n2. sha-1\n3. sha-256\n4. sha-512\n'));

    console.log(`You selected ${selectedUtilityOption}`);
    let str = ""
    let hashed = ""
    switch (selectedUtilityOption) {
        case 1:
            str = readLineSync.question('Please enter the string to be hashed using md5\n');
            hashed = md5hashing(str);
            console.log(hashed);
            break;
        case 2:
            str = readLineSync.question('Please enter the string to be hashed using sha-1\n');
            hashed = sha_1(str);
            console.log(hashed);
            break;
        case 3:
            str = readLineSync.question('Please enter the string to be hashed using sha-256\n');
            hashed = sha_256(str);
            console.log(hashed);
            break;
        case 4:
            str = readLineSync.question('Please enter the string to be hashed using sha-512\n');
            hashed = sha_512(str);
            console.log(hashed);
            break;
        default:
            console.log('Invalid option\n');
            break;
    }
}

module.exports = {
    start
}