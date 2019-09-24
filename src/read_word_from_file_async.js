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

		// TODO: ファイルが存在しない場合のエラーハンドリングができていない
		readline.createInterface({
			input: fs.createReadStream(path, {})
				.pipe(iconv.decodeStream(encoding))
		})
		.on('line',  readOneLine)
		.on('close', readOneLine);
	});
}
module.exports = readWordFromFileAsync;