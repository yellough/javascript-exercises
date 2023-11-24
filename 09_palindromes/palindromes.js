const palindromes = function (str) {
    // make lowercase
    str = str.toLowerCase();  
    // convert to an array
    // remove spaces and punctuation
    let filtered = str.match(/[a-z|0-9]/g); 
    // reverse the array
    let reversed = str.match(/[a-z|0-9]/g).reverse();
    // compare the array to the reversed array
    // return true or false
    return filtered.every((element, index) => element === reversed[index]);
};

// Do not edit below this line
module.exports = palindromes;
