const fs = require('fs');
const iconv = require('iconv-lite');
const readline = require("readline");

const readWordFromFileAsync = (path, encoding, wordId) => {
	return new Promise((resolve, reject) => {
		let nextId = 1;
		const words = {};
		const readOneLine = (line = '') => {
			words[nextId] = {
				id: nextId,
				word: line,
			};
			nextId += 1;
		}

		const createOutput = () => {
			if (wordId == null) {
				const output = Object.keys(words).map((id) => {
					return `${words[id].id}: ${words[id].word}`;
				}).join('\n');
				resolve(output);
				return;
			}

			resolve(`${words[wordId].id}: ${words[wordId].word}`);
		}

		const inputStream = fs.createReadStream(path, {});
		inputStream.on('error', reject);

		readline.createInterface({
			input: inputStream.pipe(iconv.decodeStream(encoding))
		})
		.on('line',  readOneLine)
		.on('close', createOutput);
	});
}
module.exports = readWordFromFileAsync;