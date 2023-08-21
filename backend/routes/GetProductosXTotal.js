import { Router } from "express";
import { limitGColecciones } from "../limit/limit.js";
import { proxyEndpointVerify } from "../middleware/proxyManejoTokens.js";
import { con } from '../db/atlas.js';

const AppGProductos = Router();
let db = await con();

AppGProductos.get('/', limitGColecciones(), proxyEndpointVerify(0, "GetProductosXTotal"), async (req, res) =>{
    if(!req.rateLimit) return;
    let productos = db.collection("productos");
    let result = await productos.aggregate([
        {
            $lookup: {
                from: "inventarios",
                localField: "_id",
                foreignField: "id_producto",
                as: "inventory"
            }
        },
        {
            $unwind: "$inventory"
        },
        {
            $group: {
                _id: "$_id",
                Total: { $sum: "$inventory.cantidad" },
                producto: { $first: "$$ROOT" }
            }
        },
        {    
            $project: {     
                "producto.inventory": 0
            } 
        },
        {
            $sort: { Total: -1 }
        }
    ]).toArray();
    res.send(result)

})


export default AppGProductos;