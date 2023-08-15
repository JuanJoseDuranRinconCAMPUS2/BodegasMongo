import { Expose, Type, Transform } from "class-transformer";
import { IsDefined, MaxLength, IsNumber, IsPositive, IsNotEmpty, Matches, IsString} from 'class-validator';

export class validatePBodegas{

    @Expose({ name: "identificacion_Bodega" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro identificacion_Bodega es obligatorio'}}})
    @IsPositive({ message: ()=>{ throw { status: 400, message: 'El parametro identificacion_Bodega debe ser positivo'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro identificacion_Bodega debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro identificacion_Bodega no puede estar vacio'}}})
    _id: number;

    @Expose({ name: "nombre_Bodega" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro nombre_Bodega es obligatorio'}}})
    @MaxLength(255, { message: ()=>{ throw { status: 400, message: 'El parametro nombre_Bodega debe tener como máximo 255 caracteres'}}})
    @Matches(/^[A-Za-z0-9-\s.,!]+$/, {  message: ()=>{ throw { status: 400, message: 'El parametro nombre_Bodega debe ser una cadena de texto sin caracteres especiales excepto el "-'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro nombre_Bodega no puede estar vacio'}}})
    nombre: string;

    @Expose({ name: "identificacion_Responsable" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro identificacion_Responsable es obligatorio'}}})
    @IsPositive({ message: ()=>{ throw { status: 400, message: 'El parametro identificacion_Responsable debe ser positivo'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro identificacion_Responsable debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro identificacion_Responsable no puede estar vacio'}}})
    id_responsable: number;

    @Expose({ name: "estado_Bodega" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro estado_Bodega es obligatorio'}}})
    @IsPositive({ message: ()=>{ throw { status: 400, message: 'El parametro estado_Bodega debe ser positivo'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro estado_Bodega debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro estado_Bodega no puede estar vacio'}}})
    estado: number;

    @Expose({ name: "identificacion_Usuario" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro identificacion_Usuario es obligatorio'}}})
    @IsPositive({ message: ()=>{ throw { status: 400, message: 'El parametro identificacion_Usuario debe ser positivo'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro identificacion_Usuario debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro identificacion_Usuario no puede estar vacio'}}})
    created_by: number;

    constructor(data: Partial<validatePBodegas>){
     Object.assign(this, data);
    }
}