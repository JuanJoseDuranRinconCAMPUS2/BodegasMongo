import { Router } from "express";
import { limitPColecciones } from "../limit/limit.js";
import { con } from '../db/atlas.js';
import errorcontroller from "../middleware/ErroresMongo.js";
import { proxyPBodegas } from "../middleware/proxyPBodegas.js";
const AppPBodegas = Router();
let db = await con();

AppPBodegas.post('/', limitPColecciones(235, "bodegas"), proxyPBodegas, async (req, res) =>{
    if(!req.rateLimit) return;
    let bodegas = db.collection("bodegas");
    try {
        let data = {...req.body, update_by : null, created_at: new Date(), updated_at: null, deleted_at: null}
        let result = await bodegas.insertOne(data)
        res.status(200).send({status: 200, message: "Data enviada Correctamente"});
      } catch (error) {
        errorcontroller(error, res);
      }

})


export default AppPBodegas;