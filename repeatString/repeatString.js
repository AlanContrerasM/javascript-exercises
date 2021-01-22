const repeatString = function(string, number) {
    let newStr= "";

    if(number < 0) return "ERROR";
    for(let i = 0; i < number; i++){
        newStr += string;
    }

    return newStr;
}

module.exports = repeatString
