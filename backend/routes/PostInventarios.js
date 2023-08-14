import { Router } from "express";
import { limitPColecciones } from "../limit/limit.js";
import { con } from '../db/atlas.js';
import errorcontroller from "../controllers/ErroresMongo.js";
const AppPInven = Router();
let db = await con();
let inventarios = db.collection("inventarios");

AppPInven.post('/', limitPColecciones(180, "inventarios"),async (req, res) =>{
    if(!req.rateLimit) return;
    const { _id, id_bodega, id_producto, cantidad, created_by } = req.body;
    try {
        let result = await inventarios.findOne({ id_bodega: id_bodega, id_producto: id_producto });
        let data = {...req.body, update_by : null, created_at: new Date(), updated_at: null, deleted_at: null}
        
        if (!result) {
                let NewInven = await inventarios.insertOne(data);
                res.status(200).send({status: 200, message: "Inventario Correctamente"});
        } else {
            const cantidadActual = Number(result.cantidad);
            const cantidadPlus = Number(cantidad) + cantidadActual;
            inventarios.updateOne({ id_bodega: id_bodega, id_producto: id_producto },
                { $set: { cantidad: cantidadPlus, update_by: created_by, updated_at: new Date()} });
            res.status(200).send({status: 200, message: "Cantidad del inventario Actualizado Correctamente"});
        }
    } catch (error) {
        errorcontroller(error, res);
    }
})

export default AppPInven;
