# B2W-TEST

## Utilização do Módulo

clone esse repositório em seu diretório
```
$ git clone https://github.com/jonataspinto/B2W-test.git
```
no terminal, navegue até o repositório que fora clonado e instale as dependências
```
$ cd B2W-test
$ npm install
```
em seuArquivo.js importe o módulo
```
const getProduct = require ('../B2W-test')
```
a url do produto desejado deve ser passada por parâmetro na função
```
getProduct('url')
```
o retorno será impresso no terminal após execução do seuArquivo.js
```
$ node seuArquivo.js
```
