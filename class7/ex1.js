function redundantReturn(str) {
    return function () {
        return "".concat(str);
    };
}
var text = redundantReturn("This is my message.");
console.log(text());
