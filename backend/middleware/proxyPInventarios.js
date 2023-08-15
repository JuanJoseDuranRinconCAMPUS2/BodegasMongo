import  express from 'express';
import 'reflect-metadata';
import { plainToClass } from "class-transformer";
import { validatePInventarios } from "../controllers/vPostInventarios.js";
import { validate } from 'class-validator';

const proxyPInventarios = express();

proxyPInventarios.use(async(req, res, next)=>{
    try {
        let data = plainToClass(validatePInventarios, req.body, {excludeExtraneousValues: true});
        await validate(data);
        req.body = JSON.parse(JSON.stringify(data));
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
});

export {proxyPInventarios};