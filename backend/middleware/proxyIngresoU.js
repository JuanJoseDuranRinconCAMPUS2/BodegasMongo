import  express from 'express';
import 'reflect-metadata';
import { plainToClass } from "class-transformer";
import { con } from '../db/atlas.js';
import { validateIngresoU } from "../controllers/vIngresoUsuario.js";
import { validate } from 'class-validator';
import errorcontroller from "../middleware/ErroresMongo.js";

let db = await con();
const proxyValidarUsuarios = express();
const proxyExistUsuario = express();
const proxyValidateColeccion = express();
const Endpoints = [
    "ListarBodegas", 
    "PostBodegas",
    "PostProductoInventario",
    "PostInventario",
    "TransladoProductos",
    "GetProductosXTotal"
]

let usuario_Api = db.collection("usuario_Api");
let roles_Api = db.collection("roles_Api");


let validorExistenciaUsuario = async (valor) => {
    return await usuario_Api.findOne({nombre : valor });
}

let ErrorValidacion = (res, mensaje) => {
    res.status(409).send(mensaje);
}

proxyExistUsuario.use(async(req, res, next)=>{
    try {
        let nombreVal = await validorExistenciaUsuario(req.body.nombre);
        if (!nombreVal) {
            let mensaje = {status: 409, message: `El usuario con el nombre de usuario: '${req.body.nombre}', no existe en la base de datos.`};
            ErrorValidacion(res, mensaje);
            return;
        }
        if (nombreVal.password !== req.body.password) {
            let mensaje = {status: 409, message: `Contraseña incorrecta, vuelva a intentarlo.`};
            ErrorValidacion(res, mensaje);
            return;
        }
        req.usuarioID = nombreVal._id
        let rol = await roles_Api.findOne({ _id: nombreVal.codigo_Rol });
        req.body.rol = rol.rol
        next();
    } catch (error) {
        console.log(error);
      errorcontroller(error, res);
    }
});

proxyValidateColeccion.use(async(req, res, next)=>{
    try {
        const endpointSelect = Endpoints.indexOf(req.body.endPoint);
        if (endpointSelect < 0) {
            let mensaje = {status: 409, message: `El endpoint:'${req.body.endPoint}', no existe en la base de datos, por favor intentelo nuevamente`};
            ErrorValidacion(res, mensaje);
            return;
        }
        next();
    } catch (error) {
      errorcontroller(error, res);
    }
});

proxyValidarUsuarios.use(async(req, res, next)=>{
    try {
        let data = plainToClass(validateIngresoU, req.body, {excludeExtraneousValues: true});
        await validate(data);
        req.body = JSON.parse(JSON.stringify(data));
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
});

export {proxyValidarUsuarios, proxyExistUsuario, proxyValidateColeccion};