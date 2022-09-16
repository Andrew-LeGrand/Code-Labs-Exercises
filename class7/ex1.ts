function redundantReturn(str: string) {
  return function (): string {
    return `${str}`;
  };
}

const text = redundantReturn("This is my message.");
console.log(text());
