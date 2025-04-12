let str="masai";
let unq = '';
  for (let char of str) {
    if (!unq.includes(char)) {
      unq += char;
    }
  }
console.log(unq);