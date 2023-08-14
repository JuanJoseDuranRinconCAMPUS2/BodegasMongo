import { Router } from "express";
import { limitPColecciones } from "../limit/limit.js";
import { con } from '../db/atlas.js';

const AppPBodegas = Router();
let db = await con();

function ErrorText(error) {
    let errorD =error[1];
    let text = "Errores encontrados: "
    error.forEach(errores => {
         let TpoError = errores.operatorName;
        switch (TpoError) {
            case "properties":
                text += ` Error validacion incorrecta: `
                let DesError = errores.propertiesNotSatisfied
                DesError.forEach(Errores => {

                    text += `/${Errores.description}/ `
                });
                break;

            case "additionalProperties":
                let NoError = errores.additionalProperties
                text += ` Error data incorrecta: El programa no acepta la data catalogada como: `
                NoError.forEach(dataIn => {

                    text += `/${dataIn}/ `
                });
                console.log(errores);
                break;
        
            default:
                break;
        }
    });
    return text;
}
AppPBodegas.post('/', limitPColecciones(180, "bodegas"),async (req, res) =>{
    // if(!req.rateLimit) return;
    let bodegas = db.collection("bodegas");
    try {
        let data = {...req.body, update_by : null, created_at: new Date(), updated_at: null, deleted_at: null}
        let result = await bodegas.insertOne(data)
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


export default AppPBodegas;