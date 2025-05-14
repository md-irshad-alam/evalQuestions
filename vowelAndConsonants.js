function countVowelsAndConsonants(str) {
  const vowels = "aeiouAEIOU";
  let vowelCount = 0;
  let consonantCount = 0;

  for (let char of str) {
    if (vowels.includes(char)) {
      vowelCount++;
    } else if (char.match(/[a-zA-Z]/)) {
      consonantCount++;
    }
  }
  console.log(vowelCount);
  console.log(consonantCount);
}

const result = countVowelsAndConsonants("Hello World!");
