const isNumber = (str) => /^\d+$/.test(str);

const isAlpha = (str) => /^[a-zA-Z]+$/.test(str);

const alternatingCaps = (str) => {
  return str
    .split("")
    .reverse()
    .map((ch, i) => (i % 2 === 0 ? ch.toUpperCase() : ch.toLowerCase()))
    .join("");
};

module.exports = { isNumber, isAlpha, alternatingCaps };
