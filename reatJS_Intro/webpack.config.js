//no terminal instalar: npm install -D webpack webpack-cli
// depois de crirar o arquivo webpack.config.js
// depois instalar: npm i @babel/core babel-loader @babel/preset-env babel/preset-react --save-dev

const path = require('path') //inportar o path para localizar o diretorio raiz
const HtmlWebPackPlugin = require('html-webpack-plugin')
//será executado com node
module.exports = {
    entry:"./src/index.js", // qual o arquivo que o webpack vai ler do projeto para fazer o mapeamento de todos os modulos do projeto 
  output: {
    path: path.resolve(__dirname,"dist"), // qual o nome da pasta em que o webpack vai gerar o arquivo de saida
    filename: "bundler.js" // nome do arquivo final do projeto, onde vai estár tudo empacotado
  },
  //configurações 
  module:{
    rules: [{
      test: /\.(js|jsx)$/, // oq vai enterpretar
      exclude: /node_modules/,
      use: {
        loader:"babel-loader" // qual loader o webpack vai utilizar para fazer a transpilação
      }
    }] 
  },
  //plugins
  plugins: [
    new HtmlWebPackPlugin ({
      template:'./src/index.html',
      filename:'./index.html'
    })
  ]
}