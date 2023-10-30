const sumAll = function(int1, int2) {
    let difference;
    let sum = 0;
    if (int1 < 0 || int2 < 0 || typeof(int1)!="number" || typeof(int2)!="number") {
        return "ERROR";
    } 
    else if (int1 < int2){
        difference = int2 - int1;
        for(i = 0; i <= difference; i++) {
            newSum = int1 + i;
            sum += newSum;
        }
    }
    else {
        difference = int1 - int2;
        for(i = 0; i <= difference; i++) {
            newSum = int2 + i;
            sum += newSum;
        }
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
