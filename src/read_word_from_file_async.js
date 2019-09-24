const fs = require('fs');
const iconv = require('iconv-lite');
const readline = require("readline");

const readWordFromFileAsync = (path, encoding) => {
	return new Promise((resolve, reject) => {
		let nextId = 1;
		const words = [];
		const readOneLine = (line = '') => {
			words.push({
				id: nextId,
				word: line,
			});
			nextId += 1;
		}

		const createOutput = () => {
			const output = words.map(({id, word}) => {
				return `${id}: ${word}`;
			}).join('\n');
			resolve(output);
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