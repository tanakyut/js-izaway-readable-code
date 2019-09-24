const fs = require('fs');
const iconv = require('iconv-lite');
const readline = require("readline");

const readWordFromFileAsync = (path, encoding) => {
	return new Promise((resolve, reject) => {
		let alreadyRead = false;
		const readOneLine = (line = '') => {
			if (alreadyRead) {
				return;
			}

			alreadyRead = true;
			resolve(line);
		}

		const inputStream = fs.createReadStream(path, {});
		inputStream.on('error', reject);

		readline.createInterface({
			input: inputStream.pipe(iconv.decodeStream(encoding))
		})
		.on('line',  readOneLine)
		.on('close', readOneLine);
	});
}
module.exports = readWordFromFileAsync;