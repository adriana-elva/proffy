//servidor
const express = import('express')
const server = express
//const {pageLanding,pageStudy,pageGiveClasses} = require('./pages.js')
import {pageLanding,pageStudy,pageGiveClasses} from './pages.js'
//Importar template engine
//const nunjucks = require('nunjucks')
const nunjucks= import('nunjucks')


//configurar nunjucks
console.log("nunjucks")
nunjucks.configure('src/views',{
    express: server,
    noCache:true,
})

//inicio e configuração do servidor
server
//configurar arquivos estaticos(css,scripts,imagens)
server.use(express.static("public"))

//rotas da aplicação
.get("/", pageLanding)
.get("/study",pageStudy)
.get("/give-classes", pageGiveClasses)
//start do servidor
.listen(5500)

console.log(__dirname)
