import  express from 'express';
import 'reflect-metadata';
import { plainToClass } from "class-transformer";
import { validateTransladoProductos } from '../controllers/vTransladoProductos.js';
import { validate } from 'class-validator';

const proxyTransladoProductos = express();

proxyTransladoProductos.use(async(req, res, next)=>{
    try {
        let data = plainToClass(validateTransladoProductos, req.body, {excludeExtraneousValues: true});
        await validate(data);
        req.body = JSON.parse(JSON.stringify(data));
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
});

export {proxyTransladoProductos};