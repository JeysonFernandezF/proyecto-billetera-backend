const conexion = require('../database/db');


exports.save = (req, res) => {

    
    const nombre = req.body.nombre;
    const monto = req.body.monto;
    const monto_billetera = req.body.monto_billetera;
    const billetera_id = req.body.billetera_id;
    

    conexion.query(`INSERT INTO transferencia SET ? ; ${updateBilletera(billetera_id,monto_billetera)}`,{nombre:nombre,  monto:monto, billetera_id:billetera_id},(error,results) => {
        if(error){
            console.log(error)
        }else{
            console.log(results)
            res.send({
                msg:'Exito Monto Actualizado',
            });
                
        }
    })
}

exports.delete = (req, res) => {

    
    const id_transferencia = req.body.id;
    const monto_billetera = req.body.monto_billetera;
    const billetera_id = req.body.billetera_id;
    

    conexion.query(`DELETE FROM transferencia WHERE id = ${id_transferencia} ; ${updateBilletera(billetera_id,monto_billetera)}`,(error,results) => {
        if(error){
            console.log(error)
        }else{
            
            res.send({
                msg:'Exito',
            });
        }
    })
}

exports.billetera = (req, res) => {

    const billetera = req.body.billetera;
    console.log(req.body)

    conexion.query(`SELECT * FROM transferencia WHERE billetera_id = ${billetera}`, (error,results) => {
        if(error){
            res.send(error);
        }else{
            res.send(results);
        }
    })
}


const updateBilletera = (billetera_id, monto_billetera) => {
    return `UPDATE billetera SET monto = ${monto_billetera} WHERE id = ${billetera_id}`
}