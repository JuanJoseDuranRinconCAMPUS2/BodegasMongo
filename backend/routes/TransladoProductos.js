import { Router } from "express";
import { limitPColecciones } from "../limit/limit.js";
import { con } from '../db/atlas.js';
import errorcontroller from "../controllers/ErroresMongo.js";

const AppTransladoProduct = Router();
let db = await con();
let inventarios = db.collection("inventarios");
let historiales = db.collection("historiales");

AppTransladoProduct.post('/', limitPColecciones(200, "inventarios"),async (req, res) =>{
    if(!req.rateLimit) return;
    const { historiales_id, id_bodegaOrigen, id_bodegaFinal, id_producto, cantidad, created_by } = req.body;
    let validacionId = await historiales.findOne({ _id: historiales_id});
    if(validacionId){
        res.status(500).send({status: 500, message:`Error: El _id ya se encuentra en uso`});
    }else{
        let DataInv = await inventarios.findOne({ id_bodega: id_bodegaOrigen, id_producto: id_producto });
        if (!DataInv) {
             res.status(400).send({status: 400, message: "Error al verificar la combinacion /Error encontrado: combinacion no encontrada o disponible/"});
        } else {
            TransladoOrigen(res,historiales_id, DataInv, id_bodegaOrigen,id_bodegaFinal, id_producto, cantidad, created_by);                
        }
    }
})

export default AppTransladoProduct;

async function TransladoOrigen(res, historial_Id, DataInv, bodega_Id, bodegaDestino_Id, producto_Id, nProductos, creador) {
    const cantidadActual= Number(DataInv.cantidad);
   
        if (nProductos > cantidadActual) {
            res.status(400).send({status: 400, message: "Error: La cantidad a trasladar es mayor que la cantidad disponible en la bodega de origen"});
        } else{
            const cantidadMinus =  cantidadActual - Number(nProductos);
            let BodegaOrigenUp = await inventarios.updateOne({ id_bodega: bodega_Id, id_producto: producto_Id },
                { $set: { cantidad: cantidadMinus, update_by: creador, updated_at: new Date()} });
            let DataInvD = await inventarios.findOne({ id_bodega: bodegaDestino_Id, id_producto: producto_Id });
            TransladoDestino(res, DataInvD, bodegaDestino_Id, producto_Id, nProductos, creador);
            historial(res, historial_Id, bodega_Id, bodegaDestino_Id, DataInv._id,nProductos, creador);
        }
    
}

async function TransladoDestino(res, DataInv, bodega_Id, producto_Id, nProductos, creador) {
    const cantidadActual= Number(DataInv.cantidad);
    const cantidadPlus =  cantidadActual + Number(nProductos);
     let BodegaDestinoUp = await inventarios.updateOne({ id_bodega: bodega_Id, id_producto: producto_Id },
            { $set: { cantidad: cantidadPlus, update_by: creador, updated_at: new Date()} });
}

async function historial(res, id, bodegaOrigen_Id, bodegaDestino_Id, Inv_id, nProductos, creador) {
    try {
        let data = { _id: id, cantidad: nProductos, id_bodega_origen: bodegaOrigen_Id, id_bodega_destino: bodegaDestino_Id, id_inventario: Inv_id, created_by: creador}
        let historialCreado = await historiales.insertOne({...data, update_by : null, created_at: new Date(), updated_at: null, deleted_at: null});
        res.status(200).send({status: 200, message: "Translado completado Correctamente"});
    } catch (error) {
        errorcontroller(error, res);
    }
}

