const fibonacci = function(num) {
    //returns last number on array fibonacci
    let fibonacciArr = [1,1];

    if(num<0){
        return "OOPS";
    }
    //creating a loop to start creating the fibonacci
    for(let i = 2 ; i<= num; i++){
        fibonacciArr.push(
            fibonacciArr[i-1]+fibonacciArr[i-2]
        );
    }

    return fibonacciArr[num-1];

}

module.exports = fibonacci
