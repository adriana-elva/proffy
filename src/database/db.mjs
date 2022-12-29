import{Database} from 'sqlite-async'

function execute(db){
    //console.log(db)
    // Criar as tabelas do bamco de dados
   return db.exec(`

    CREATE TABLE IF NOT EXISTS proffys(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        avatar TEXT,
        whatsapp TEXT,
        bio TEXT
    );

    CREATE TABLE IF NOT EXISTS classes(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        subject INTEGER,
        cost TEXT,
        proffy_id INTEGER
    );

    CREATE TABLE IF NOT EXISTS class_schedule(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        class_id INTEGER,
        weekday INTEGER,
        time_from INTEGER,
        time_to INTEGER
    );
    `)
}
const conectdb = Database.open('./src/database/database.sqlite').then(execute)
export{conectdb}