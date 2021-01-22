const removeFromArray = function(arr, ...args) {
    console.log(args)
    args.forEach(el => {
        if(arr.indexOf(el)>= 0){
            arr.splice(arr.indexOf(el),1);
        }

    })

    return arr

    //can also be done with include
    const newArray = [];
    // use forEach to go through the array
    a.forEach((item) => {
        // push every element into the new array
        // UNLESS it is included in the function arguments
        // so we create a new array with every item, except those that should be removed
        if (!args.includes(item)) {
            newArray.push(item);    
        }
    });
    // and return that array
    return newArray;
    
}

module.exports = removeFromArray
