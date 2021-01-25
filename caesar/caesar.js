const caesar = function(str, num) {
    let newStr ="";
    let myRegex = /[a-z]/i

    //make it work with large numbers
    if(num > 26 || num< -26){
        num = num % 26;
    }
    //loop through string
    for(let i = 0; i < str.length; i++){

        //check if its punctuation or letter


        if(myRegex.test(str[i])){

            //convert to lowercase
            let charLower = str[i].toLowerCase()
            .charCodeAt(0) + num;

            //checking if we go over 122 for z or less than 97 for a
            if(charLower > 122){
                charLower = charLower % 122 + 96;
            }else if(charLower < 97){
                charLower = 122 -(96 - charLower);
            }
    
            newStr += str[i] == str[i].toUpperCase() ? 
            String.fromCharCode(charLower).toUpperCase() 
            : String.fromCharCode(charLower);
        } else{
            newStr += str[i];
        }

    }
    return newStr
}

module.exports = caesar
