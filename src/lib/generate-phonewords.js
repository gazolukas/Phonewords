const numberLetters = {
  2: ['a', 'b', 'c'],
  3: ['d', 'e', 'f'],
  4: ['g', 'h', 'i'],
  5: ['j', 'k', 'l'],
  6: ['m', 'n', 'o'],
  7: ['p', 'q', 'r', 's'],
  8: ['t', 'u', 'v'],
  9: ['w', 'x', 'y', 'z'],
};

/**
 * generatePhonewords
 * @param {string} string of numbers to generate phonewords from
 * @return {array} array of phoneword strings, sorted a -> z
 */
module.exports = function generatePhonewords(inputNumbers) {
  const numbers = inputNumbers.toString().split('');
  const length = numbers.length - 1;

  let index = 0;
  let strs = [];

  do {
    const currentNumber = numbers[index];
    const newStrs = [];

    // check number exists (other characters will make this fail)
    if (numberLetters[currentNumber]) {
      const letters = numberLetters[currentNumber];
      // make new strs
      for (let i = 0; i < letters.length; i += 1) {
        if (strs.length) {
          for (let j = strs.length - 1; j >= 0; j -= 1) {
            newStrs.push(strs[j] + letters[i]);
          }
        } else {
          newStrs.push(letters[i]);
        }
      }
      // if number doesn't exist (a 1, 0 or another character) then use current strings
    } else {
      newStrs.push(...strs);
    }

    strs = newStrs;

    index += 1;
  } while (index <= length);

  // sort alpha a -> z
  return strs.sort((a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  });
};
