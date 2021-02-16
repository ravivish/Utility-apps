const readLineSync = require('readline-sync');

function humanDateConvert(str) {
    try {
        let date = new Date(str * 1000);
        return date.toDateString();
        // return date.toLocaleDateString();
    } catch (e) {
        return "invalid data!";
    }
}

function epochtime(year, month, day, hour, minute, second) {
    if (year < 1900 || year > 2021) {
        return "Invalid year\n";
    }
    if (month < 0 || month > 12) {
        return "Invalid month\n";
    }
    if (day < 0 || day > 31) {
        return "Invalid date\n";
    }
    if (hour < 0 || hour > 24) {
        return "Invalid hour\n";
    }
    if (minute < 0 || minute > 59) {
        return "Invalid minute\n";
    }
    if (second < 0 || second > 59) {
        return "Invalid second\n";
    }
    const epochdate = new Date(`${month},${day},${year} ${hour}:${minute}:${second}`);
    console.log(epochdate.toDateString());
    return Math.floor(epochdate.getTime()/1000.0);
}

function start() {

    const selectedUtilityOption = parseInt(readLineSync.question('Welcome to epoch converter. Which function would you like to use?\n1. Convert to HumanDate\n2. Convert to epoch\n'));

    console.log(`You selected ${selectedUtilityOption}`);
    let str = ""
    switch (selectedUtilityOption) {
        case 1:
            str = readLineSync.question('Please enter epoch data\n');
            console.log(humanDateConvert(str));
            break;
        case 2:
            let year = readLineSync.question('Please enter year\n');
            let month = readLineSync.question('Please enter month\n');
            let date = readLineSync.question('Please enter the date\n');
            let hour = readLineSync.question('Please enter the hour\n');
            let minute = readLineSync.question('Please enter the minute\n');
            let second = readLineSync.question('Please enter the second\n');
            console.log(epochtime(year, month, date, hour, minute, second));
            break;
        default:
            console.log('Invalid option\n');
            break;
    }
}

module.exports = {
    start
}