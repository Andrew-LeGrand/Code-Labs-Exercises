const myArr = [true, false, false, true];

function countTrue(array) {
    let countOfTrue = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] === true) {
            countOfTrue ++;  
        }
    }
    return countOfTrue;
}

console.log(countTrue(myArr));