const removeFromArray = function(array, ...values) {
    let outputArray = [];
    array.forEach((item) => {
    if (!values.includes(item)) {
        outputArray.push(item);
    }
    });
    return outputArray;
};

// Do not edit below this line
module.exports = removeFromArray;
