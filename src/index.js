const readWordFromFileAsync = require('./read_word_from_file_async');

const fileName = process.argv[2]; // これは引数1のこと
if (!fileName) {
	console.error('引数1 に単語ファイルのパスを指定してください。');
	process.exit(0);
}
const encoding = 'utf-8';

readWordFromFileAsync(fileName, encoding).then(
	word => console.log(word),
	() => console.error(`ファイル ${fileName} が見つかりません。`));