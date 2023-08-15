import { Expose, Type, Transform } from "class-transformer";
import { IsDefined, MaxLength, IsNumber, IsPositive, IsNotEmpty, Matches, IsString} from 'class-validator';

export class validatePProductoInventario{

    @Expose({ name: "identificacion_Producto" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro identificacion_Producto es obligatorio'}}})
    @IsPositive({ message: ()=>{ throw { status: 400, message: 'El parametro identificacion_Producto debe ser positivo'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro identificacion_Producto debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro identificacion_Producto no puede estar vacio'}}})
    _id: number;

    @Expose({ name: "nombre_Producto" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro nombre_Producto es obligatorio'}}})
    @MaxLength(255, { message: ()=>{ throw { status: 400, message: 'El parametro nombre_Producto debe tener como máximo 255 caracteres'}}})
    @Matches(/^[A-Za-z0-9-\s.,!]+$/, {  message: ()=>{ throw { status: 400, message: 'El parametro nombre_Producto debe ser una cadena de texto sin caracteres especiales excepto el "-'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro nombre_Producto no puede estar vacio'}}})
    nombre: string;

    @Expose({ name: "descripcion_Producto" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro descripcion_Producto es obligatorio'}}})
    @MaxLength(255, { message: ()=>{ throw { status: 400, message: 'El parametro descripcion_Producto debe tener como máximo 255 caracteres'}}})
    @Matches(/^[A-Za-z0-9-\s.,!]+$/, {  message: ()=>{ throw { status: 400, message: 'El parametro descripcion_Producto debe ser una cadena de texto sin caracteres especiales excepto el "-'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro descripcion_Producto no puede estar vacio'}}})
    descripcion: string;

    @Expose({ name: "estado_Producto" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro estado_Producto es obligatorio'}}})
    @IsPositive({ message: ()=>{ throw { status: 400, message: 'El parametro estado_Producto debe ser positivo'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro estado_Producto debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro estado_Producto no puede estar vacio'}}})
    estado: number;

    @Expose({ name: "identificacion_Usuario" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro identificacion_Usuario es obligatorio'}}})
    @IsPositive({ message: ()=>{ throw { status: 400, message: 'El parametro identificacion_Usuario debe ser positivo'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro identificacion_Usuario debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro identificacion_Usuario no puede estar vacio'}}})
    created_by: number;

    constructor(data: Partial<validatePProductoInventario>){
     Object.assign(this, data);
    }
}