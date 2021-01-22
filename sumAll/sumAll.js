const sumAll = function(startNum, endNum) {

    let numbers = [startNum, endNum];

    numbers.sort();

    startNum = numbers[0];
    endNum = numbers[1];

    if((typeof startNum != "number" || typeof endNum != "number") ||
        (startNum < 0 || endNum < 0)){
            return "ERROR";
        }
    
    let sum = 0;

    for(startNum; startNum <= endNum; startNum ++){
        sum += startNum;
    }

    return sum;
}

module.exports = sumAll
