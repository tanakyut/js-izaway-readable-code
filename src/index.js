const readWordFromFileAsync = require('./read_word_from_file_async');

const fileName = process.argv[2]; // これは引数1のこと
if (!fileName) {
	console.error('引数1 に単語ファイルのパスを指定してください。');
	process.exit(0);
}
const encoding = 'utf-8';

const wordId = process.argv[3]; // 引数2

readWordFromFileAsync(fileName, encoding, wordId).then(
	output => console.log(output),
	(e) => console.error(`ファイル ${fileName} 読み込み中にエラーが発生しました。：\n${e.message}`));