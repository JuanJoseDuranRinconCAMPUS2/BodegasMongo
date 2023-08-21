import { Router } from "express";
import { limitGColecciones } from "../limit/limit.js";
import { proxyEndpointVerify } from "../middleware/proxyManejoTokens.js";
import { con } from '../db/atlas.js';

const AppGBodegas = Router();
let db = await con();

AppGBodegas.get('/', limitGColecciones(), proxyEndpointVerify(1, "ListarBodegas", "Admin"), async (req, res) =>{
    if(!req.rateLimit) return;
    let alquiler = db.collection("bodegas");
    let result = await alquiler.find({}).sort( { nombre: 1  } ).toArray();
    res.send(result)

})


export default AppGBodegas;