const fs = require('fs');
const path = require('path');
let files = fs.readdirSync(path.resolve(__dirname, 'docs/'), 'utf8');

let docs = [];
for(let f of files){
	if(f.endsWith('.md')) {
		docs.push(path.basename(f, '.md'));
	}
}

let code = `//docs-start
var docs = ${JSON.stringify(docs)};
//docs-end`;
let source = fs.readFileSync(path.resolve(__dirname, 'docs/.vuepress/public/qrcode.html'), 'utf8');
source = source.replace(/\/\/docs-start(.|\n|\r)*?\/\/docs-end/, code);
fs.writeFileSync(path.resolve(__dirname, 'docs/.vuepress/public/qrcode.html'), source, 'utf8');