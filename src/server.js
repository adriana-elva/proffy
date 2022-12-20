//Dados
const proffys = [{
    "name":"Diego Fernandes",
    "avatar":"https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
    "whatsapp":"1196786",
    "bio":"Entusiasta das melhores tecnologias de química avançaddo. Apaixonado por explodir coisas em laboratorio e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
    "subject":"Quimica",
    "cost":"20",
    "weekday":[0],
    "time_from":[720],
    "time_to":[1220]
},
{
    "name":"Danielle",
    "avatar":"https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
    "whatsapp":"1196786",
    "bio":"Entusiasta das melhores tecnologias de química avançaddo. Apaixonado por explodir coisas em laboratorio e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
    "subject":"Portugues",
    "cost":"20",
    "weekday":[1],
    "time_from":[720],
    "time_to":[1220]
}]

const subjects=[
    "Artes",
    "Biologia",
    "Ciências",
    "Educação Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Quimica",
]

const weekdays=[
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
]

//funcionalidades

function getSubject(subjectNumber){
    const position = +subjectNumber-1
    return subjects[position]
}

function pageLanding(req, res){
    return res.render("index.html")
}

function pageStudy(req, res){
    const filters=req.query
    console.log(req.query)
    return res.render("study.html", {proffys,filters,subjects, weekdays})
}
function pageGiveClasses(req,res){
    const data = req.query

    console.log(data)
    //Se tiver dados
    const isNotEmpty = Object.keys(data).length != 0
    if(isNotEmpty){
        
        data.subject = getSubject(data.subject)
        //adicionar dados a lista de proffys
         //push -> empurrar
        // pegando um array, estou fazendo um push (empurrando dado)
         proffys.push(data)
         return res.redirect("/study")
    }
     //se não, mostrar a pagina
    return res.render("give-classes.html", {subjects, weekdays})
}

//servidor
const express = require('express')
const server = express()
//Importar template engine
const nunjucks = require('nunjucks')
//configurar nunjucks
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
