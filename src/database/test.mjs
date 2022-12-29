//Solicitar o require do db, o node sabe que tem que devolver o exprt
import {conectdb} from './db.mjs'
import {createProffy} from './createProffy.mjs'

conectdb.then(async(db)=>{
    //Inserir dados
    var proffyValue = {
        name:"Adriana Marca",
        avatar:"https://avatars.githubusercontent.com/u/47532129?v=4",
        whatsapp:"123456789",
        bio: "Instrutor de Educação Fisica",
    }

    var classValue={
        subject:1,
        cost:"20"
        //o proffy id virá pelo banco de dados 
    }

    var classScheduleValues=[
        //class_id virá pelo banco de dados, após cadastro da classe com aula 
    {
        weekday:1,
        time_from:720,
        time_to:1220
    },
    {
        weekday:0,
        time_from:520,
        time_to:1220
    }
]
    //await createProffy(db,{proffyValue,classValue,classScheduleValues})

    //Consultar dados inseridos
    //todos os proffys
    const selectedproffys = await db.all("SELECT * FROM proffys")
    //console.log(selectedproffys)

    //consultar as classes de um determinado professor
    //e trazer junto os dados do professor
    const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.* 
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
    //console.log(selectClassesAndProffys)

    //o horario que a pessoa trabalha, por exemplo, é das 8h-18h
    //o horario do time_from(8h) precisa ser menor ou igual ao horario solicitado
    //o time_to precisa ser acima

    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = 1
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "520"
        AND class_schedule.time_to > "520"
    `)
    console.log(selectClassesSchedules)
})