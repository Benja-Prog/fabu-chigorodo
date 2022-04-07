const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'us-cdbr-east-05.cleardb.net',
    user: 'b2a3ba508fd584',
    password: '794bf2ef',
    database: 'heroku_42053a498ca1022'
});

connection.connect((error)=>{
    if(error){
        console.log('El error de conexión es : ' +error);
        return;
    }
    console.log('Conectado Exitosamente a Base de Datos');
})
module.exports = connection;