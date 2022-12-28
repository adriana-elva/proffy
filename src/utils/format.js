//Dados
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

export  {
    subjects,
    weekdays,
    getSubject
}