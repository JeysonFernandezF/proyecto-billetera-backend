const mysql =  require('mysql');

const conexion = mysql.createConnection({
    multipleStatements: true,
    host: '127.0.0.1',
    database: 'billetera',
    user: 'root',
    password: '123456'
});

conexion.connect((error) => {
    if(error){
        throw error
    }else{
        console.log('CONEXION EXISTOSA')
    }
});

module.exports = conexion;