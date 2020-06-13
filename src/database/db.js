/* Importar a dependencia do Sqlite */
const sqlite3 = require("sqlite3").verbose()

/* Iniciar o objeto de banco de dados */
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db

//Utilizar o objeto de banco de dados 
/* db.serialize(() => {
    //Criar uma tabela 
    db.run(`
        CREATE TABLE IF NOT EXISTS places (
            id  INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            name TEXT,
            adress TEXT,
            adress2 TEXT,
            state TEXT,
            city TEXT,
            items TEXT

        );
    `)

    //Inserir dados na tabela 
    const query = `
    INSERT INTO places(
        image ,
        name ,
        address ,
        adress2 ,
        state ,
        city ,
        items 
    ) VALUES (?,?,?,?,?,?,?);
    `
    const values = [
        "https://images.unsplash.com/photo-1585545337229-1853a901b54e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60", "PaperSide", "Guilherme Gemballar, Jardim América", "N°260", "Santa Catarina", "Rio do sul", "Resíduos Eletrônicos, Lâmpadas"

    ]

    function afterInsertData(err) {
        if (err) {
            return console.log(err)
        }
        console.log("Cadastrado com sucesso")
        console.log(this)
    }

    db.run(query, values, afterInsertData)

    //Consultar os dados 
    db.all(`SELECT * FROM places`, function (err, rows) {
        if (err) {
            return console.log(err)
        }
        console.log("Aqui estão seus registros")
        console.log(rows)
    })

})   
    //deletar um dado da tabela  

    db.run(`DELETE FROM places WHERE id = ?`, [36], function(err){
         if(err) {
            return console.log(err)
}
         console.log("Registro deletado com sucesso")
     })
     */ 

    
  
    
   

