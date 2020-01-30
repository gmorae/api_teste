const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mysql = require('mysql')

function conexao() {
    return mysql.createConnection({
        host: 'localhost', // Host do banco de dados 
        port: '5050', // porta do banco, a padrão é a 3306
        user: 'root', // usuario do banco de dados 
        password: '', // senha do banco
        database: 'teste' // nome da database
    })
}

app.use(bodyParser.json({ limit: '5mb' }))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*'); // endereço que pode acessar, neste caso todos podem por conta do *
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PATH, PUT, DELETE'); // metodos que irá consguir acessar
    res.header('Access-Control-Allow-Credentials', true);
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})



app.get("/", (req, res) => {
    res.send('Bem vindo')
})

var json = {
    id: 1,
    name: 'Teste',
    resumo: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
}
app.get("/teste", (req, res) => {
    console.log('listando /teste');
    res.json(json)
})

app.listen(8080, () => {
    console.log('server on por 8080');
})
//Este metodo busca dados no banco
// app.get("/user", (req, res) => {
    // passa assim a query qyue voce quer 
    // const sql = "select * from programadores"
    // Esta conexao() é a função la encima 
    // .query é o que conseguimos acessa por meio do mysql
    // conexao().query(sql, (erro, ln, cl) => {
        // res.json(ln)
    // })
// })