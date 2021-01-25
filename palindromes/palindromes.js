const palindromes = function(str) {

    //converts to lowerCase
    let newStr = str.toLowerCase();

    //clears all punctuations

    let myArr = newStr.match(/[a-z]/g)

    let answer = "";

    for(let i = myArr.length -1; i >= 0; i--){
        answer += myArr[i];
    }

    return answer == myArr.join("");
}



module.exports = palindromes
