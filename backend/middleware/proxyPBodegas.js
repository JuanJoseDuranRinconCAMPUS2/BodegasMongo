import  express from 'express';
import 'reflect-metadata';
import { plainToClass } from "class-transformer";
import { validatePBodegas } from "../controllers/vPostBodegas.js";
import { validate } from 'class-validator';

const proxyPBodegas = express();

proxyPBodegas.use(async(req, res, next)=>{
    try {
        let data = plainToClass(validatePBodegas, req.body, {excludeExtraneousValues: true});
        await validate(data);
        req.body = JSON.parse(JSON.stringify(data));
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
});

export {proxyPBodegas};