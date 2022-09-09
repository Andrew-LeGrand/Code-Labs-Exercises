function redundantReturn(str) {
  return function () {
    return `${str}`;
  };
}

const message = redundantReturn("Hello! This is the 'str' from the function.");
console.log(message());
