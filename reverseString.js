function reverseWords(str) {
  let rev = str.split("").reverse().join("").split(" ").reverse().join(" ");

  return rev;
}

const result = reverseWords("JavaScript is fun");
console.log(result);
