import {conectdb} from './database/db.js'
import {subjects,weekdays,getSubject} from './utils/format.js'
//const {subjects,weekdays,getSubject} = require('./utils/format')
function pageLanding(req, res){
    return res.render("index.html")
}

function pageStudy(req, res){
    const filters=req.query

    if(!filters.subject || !filters.weekday || !filters.time){
        return res.render("study.html", {filters,subjects, weekdays})
    }
    console.log("Não tem campos vazios")
    const query = `
        SELECT classes.*, proffys.* 
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE EXIST(
            SELECT class_schedule.*
            FROM class_schedule
            WHERE class_schedule.class_id = classes.id
            AND class_schedule.weekday = ${filters.weekday}
            AND class_schedule.time_from <= ${filters.time}
            AND class_schedule.time_to > ${filters.time}
        )
    `
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
export{
    pageLanding,
    pageStudy,
    pageGiveClasses
}
// module.exports = {
//     pageLanding,
//     pageStudy,
//     pageGiveClasses
// }