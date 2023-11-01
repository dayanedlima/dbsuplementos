const mysql = require('mysql');


const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'dbdayane',
    multipleStatements: true

});

db.connect((erro) => {


    if (erro){


        throw erro;


    }


    console.log('Conectando ao BD...');


});

module.exports = db;
