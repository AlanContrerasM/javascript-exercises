const getTheTitles = function(arr) {

    //can be done both using map and reduce
    
    //map version. 
    // let titles = arr.map(book => book.title)
    // return titles
    
    //reduce version
    let titles2 = arr.reduce((newArr, book)=>{
        newArr.push(book.title);
        return newArr;
    }, [])
    return titles2
}

module.exports = getTheTitles;
