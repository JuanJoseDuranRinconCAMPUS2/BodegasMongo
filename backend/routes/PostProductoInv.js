import { Router } from "express";
import { limitPColecciones } from "../limit/limit.js";
import { ErrorText } from "./PostBodegas.js";
import { con } from '../db/atlas.js';

const AppProductoInv = Router();
let db = await con();
let productos = db.collection("productos");
let inventarios = db.collection("inventarios");
let bodegaDefault = 11;
let cantidadInicial = 1;
AppProductoInv.post('/', limitPColecciones(200, "productos"),async (req, res) =>{
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
        switch (error.code) {
            case 121:
                const ErrorL = error.errInfo.details.schemaRulesNotSatisfied;
                res.status(500).send({status: 500, message: ErrorText(ErrorL)});
            break;
            
            case 11000:
                res.status(500).send({status: 500, message:`Error al guardar la data, _id ya se encuentra en uso`});        
            break;
            default:
                res.status(500).send({ status: 500, message: "Error al guardar la data" });
            break;
        }
      }

})

export default AppProductoInv;