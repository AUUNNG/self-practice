function getFreqOfWords(sentence) {
	if (sentence === null || sentence === undefined) {
		return undefined;
	}
	result = {};
	sentenceArray = sentence.split(" ").filter(Boolean);
	for (const i of sentenceArray) {
		result[i] = i in result ? result[i] + 1 : 1;
	}
	return result;
}

console.log(getFreqOfWords("Today is present  and present is your gift"));
console.log(getFreqOfWords(null));
console.log(getFreqOfWords(undefined));
