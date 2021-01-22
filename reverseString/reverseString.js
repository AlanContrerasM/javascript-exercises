const reverseString = function(str) {
    let splittedStr = str.split("");
    let newStr = [];

    for(let i = splittedStr.length; i >= 0; i-- ){
        newStr.push(splittedStr[i]);
    }

}
    //can also be 
    //return str.split("").reverse().join("");
    return newStr.join("");

    

module.exports = reverseString
