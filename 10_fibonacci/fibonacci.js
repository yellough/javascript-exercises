const fibonacci = function(num) {
    let f = 1;
    let a = 0;
    let b = 1;
    
    num = num*1;
    if ( num < 0 ) {
        return "OOPS"
    }
    else {
        for ( i=2; i<=num; i++) {
            f = a + b;
            a = b;
            b = f;
        }
        return f;
    }
    
};

// Do not edit below this line
module.exports = fibonacci;
