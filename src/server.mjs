//servidor
import pkg from 'express'
const server = pkg()
import {pageLanding,pageStudy,pageGiveClasses,saveClasses} from './pages.mjs'

//Importar template engine
import nunjucks from 'nunjucks'

//configurar nunjucks
nunjucks.configure('src/views',{
    express: server,
    noCache:true,
})

//inicio e configuração do servidor
server

//receber os dados do req.body
.use(pkg.urlencoded({extend:true}))
//configurar arquivos estaticos(css,scripts,imagens)
server.use(pkg.static("public"))

//rotas da aplicação
.get("/", pageLanding)
.get("/study",pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
//start do servidor
.listen(5500)

console.log("funcionou")