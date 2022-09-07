function reversibleInclusiveList(numOne, numTwo) {
    let myArr = [];
    if (numOne < numTwo) {
        for (let i = numOne; i <= numTwo; i++) {
            myArr.push(i);
        }
        return myArr
    } else if (numOne > numTwo) {
        for (let i = numOne; i >= numTwo; i--) {
            myArr.push(i);
        }
        return myArr
    } else {
        return
    }
}

console.log(reversibleInclusiveList(24, 17));
