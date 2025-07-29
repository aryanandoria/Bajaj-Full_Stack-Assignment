const { isNumber, isAlpha, alternatingCaps } = require("../utils/helper");

const processData = (data) => {
  let even_numbers = [];
  let odd_numbers = [];
  let alphabets = [];
  let special_characters = [];
  let sum = 0;
  let concat_chars = [];

  data.forEach((item) => {
    if (isNumber(item)) {
      const num = parseInt(item);
      num % 2 === 0 ? even_numbers.push(item) : odd_numbers.push(item);
      sum += num;
    } else if (isAlpha(item)) {
      alphabets.push(item.toUpperCase());
      concat_chars.push(item);
    } else {
      special_characters.push(item);
    }
  });

  return {
    even_numbers,
    odd_numbers,
    alphabets,
    special_characters,
    sum: sum.toString(),
    concat_string: alternatingCaps(concat_chars.join("")),
  };
};

module.exports = { processData };
