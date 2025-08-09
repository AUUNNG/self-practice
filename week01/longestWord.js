function longestWord(sentence) {
  if (
    typeof sentence !== "string" ||
    sentence === null ||
    sentence === undefined ||
    sentence.trim() === ""
  ) {
    return "";
  }

  return sentence
    .split(" ")
    .reduce(
      (acc, crr) => (crr.length > acc.length ? (acc = crr) : (acc = acc)),
      ""
    );
}
module.exports = longestWord;
