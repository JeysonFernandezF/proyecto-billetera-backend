const conexion = require('../database/db');


exports.index = (req,res) =>{
    conexion.query('SELECT * FROM billetera', (error, results) => {
        if(error){
            console.log(error);
        }else{
            res.send(results);
        }
    })
}

exports.save = (req, res) => {

    const billetera_id = parseInt(req.body.billetera_id);
    const nombre = req.body.nombre;
    let monto = req.body.monto;
    const favorito = 0;


    if(monto == "" || monto == "-"){
        monto = 0;
    }

    if(billetera_id == 0){

        const monto_inicial = monto;
    
        conexion.query('INSERT INTO billetera SET ?',{nombre:nombre, monto_inicial:monto_inicial, monto:monto,favorito:favorito},(error,results) => {
            if(error){
                console.log(error)
            }else{
                res.send({msg:'Nueva billetera agregada con éxito'});
            }
        })
    }else{
        conexion.query(`UPDATE billetera SET ? WHERE id = ${billetera_id}`,{ nombre:nombre, monto:monto},(error,results) => {
            if(error){
                console.log(error)
            }else{
                res.send({msg:'Billetera actualizada con éxito'});
            }
        })
    }

}

exports.favorito = (req,res) =>{
    
    const billetera_id = parseInt(req.body.billetera_id);
    const favorito = req.body.favorito == 0 ? 1 : 0;

    conexion.query(`UPDATE billetera SET ? WHERE id = ${billetera_id}`,{ favorito:favorito},(error,results) => {
        if(error){
            console.log(error)
        }else{
            res.send({msg:'Billetera actualizada con éxito'});
        }
    })
}

exports.delete = (req, res) => {

    const billetera_id = parseInt(req.body.billetera_id);

    conexion.query(`DELETE FROM transferencia WHERE billetera_id = ${billetera_id} ; DELETE FROM billetera WHERE id = ${billetera_id}`,(error,results) => {
        if(error){
            console.log(error)
        }else{
            res.send({
                msg:'Exito',
            });
        }
    })
}