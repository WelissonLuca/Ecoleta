const express = require("express")
const server = express()

//Banco de dados

const db = require  ("./database/db")

// configurar pasta publica
server.use(express.static("public"))

//Habilitar o req.body
server.use(express.urlencoded({extended: true}))


//Nunjucks template engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})

/* Pagina inicial */

// req:requisição
// res:resposta
server.get("/", (req, res) => {
    return res.render("index.html", {
        title: "Um título"
    })
})

server.get("/create-point", (req, res) => {

   /*  console.log("req.query") */



    return res.render("create-point.html")
})

server.post("/savepoint", (req, res) => {
   
   
    //Inserir dados no BD
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
        req.body.image,
        req.body.name,
        req.body.address,
        req.body.adress2,
        req.body.state,
        req.body.city,
        req.body.item,
    ]

    function afterInsertData(err) {
        if(err) {
            return console.log(err)
        }

        console.log("Cadastrado com sucesso")
        console.log(this)

        return res.render("create-point.html", {saved: true})
    }

    db.run(query, values, afterInsertData)
    

   
    
})

    














server.get("/search", (req, res) => {

    const search = req.query.search

    if(search == "") {
        return res.render("search.html", {total: 0})
    }

    

    //Pegar dados 
    db.all(`SELECT * FROM places WHERE city LIKE '%${search}%' `, function (err, rows) {
        if (err) {
            return console.log(err)
        }
        const total = rows.length

       
       /*  console.log("Aqui estão seus registros")
        console.log(rows) */
        /* Mostar a pagina html com os dados do BD */
        return res.render("search.html",{places:rows, total})
    })





})
/* Ligar servidor */
server.listen(3000)