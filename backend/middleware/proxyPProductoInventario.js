import  express from 'express';
import 'reflect-metadata';
import { plainToClass } from "class-transformer";
import { validatePProductoInventario } from '../controllers/vPostProductoInventario.js';
import { validate } from 'class-validator';

const proxyPProductoInventario = express();

proxyPProductoInventario.use(async(req, res, next)=>{
    try {
        let data = plainToClass(validatePProductoInventario, req.body, {excludeExtraneousValues: true});
        await validate(data);
        req.body = JSON.parse(JSON.stringify(data));
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
});

export {proxyPProductoInventario};