# js-izaway-readable-code
研修用

## 実行方法
1.  [node.js](https://nodejs.org/) をインストール ※OSごとの導入差異は左記で確認してください
2.  本リポジトリをクローンしたディレクトリ(本 README.md と同階層)に移動
3.  `npm i` で依存モジュールをインストール
4.  `npm run index {単語ファイル名}` で実行 ※単語ファイルは本リポジトリをクローンしたディレクトリ(本 README.md と同階層)の相対パスで指定します  
    例: `npm run index dictionary-data-sample.txt`

## 単語ファイルのフォーマット
*   単語を1行で入力します。2行目以降は無視されます。
*   文字コードは UTF-8 で作成してください。  
    例:  
	```
	上手
	```