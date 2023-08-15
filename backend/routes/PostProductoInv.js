import { Router } from "express";
import { limitPColecciones } from "../limit/limit.js";
import { con } from '../db/atlas.js';
import errorcontroller from "../middleware/ErroresMongo.js";
import { proxyPProductoInventario } from "../middleware/proxyPProductoInventario.js";

const AppProductoInv = Router();
let db = await con();
let productos = db.collection("productos");
let inventarios = db.collection("inventarios");
let bodegaDefault = 11;
let cantidadInicial = 1;

AppProductoInv.post('/', limitPColecciones(236, "productos"), proxyPProductoInventario, async (req, res) =>{
    if(!req.rateLimit) return;
    const {_id, created_by} = req.body;
    try {
        let data = {...req.body, update_by : null, created_at: new Date(), updated_at: null, deleted_at: null}
        let result = await productos.insertOne(data);
        let result2 = await inventarios.insertOne({
            _id : _id,
            id_bodega: bodegaDefault,
            id_producto: _id,
            cantidad: cantidadInicial,
            created_by: created_by,
            update_by: null,
            created_at: new Date(),
            updated_at: null,
            deleted_at: null
          });
        res.status(200).send({status: 200, message: "Data enviada Correctamente"});
      } catch (error) {
        errorcontroller(error, res);
      }

})

export default AppProductoInv;