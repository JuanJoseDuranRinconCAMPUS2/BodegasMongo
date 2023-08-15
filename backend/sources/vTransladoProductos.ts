import { Expose, Type, Transform } from "class-transformer";
import { IsDefined, MaxLength, IsNumber, IsPositive, IsNotEmpty, Matches, IsString} from 'class-validator';

export class validateTransladoProductos{

    @Expose({ name: "identificacion_Historial" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro identificacion_Historial es obligatorio'}}})
    @IsPositive({ message: ()=>{ throw { status: 400, message: 'El parametro identificacion_Historial debe ser positivo'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro identificacion_Historial debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro identificacion_Historial no puede estar vacio'}}})
    historiales_id: number;

    @Expose({ name: "identificacion_bodegaOrigen" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro identificacion_bodegaOrigen es obligatorio'}}})
    @IsPositive({ message: ()=>{ throw { status: 400, message: 'El parametro identificacion_bodegaOrigen debe ser positivo'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro identificacion_bodegaOrigen debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro identificacion_bodegaOrigen no puede estar vacio'}}})
    id_bodegaOrigen: number;

    @Expose({ name: "identificacion_bodegaFinal" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro identificacion_bodegaFinal es obligatorio'}}})
    @IsPositive({ message: ()=>{ throw { status: 400, message: 'El parametro identificacion_bodegaFinal debe ser positivo'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro identificacion_bodegaFinal debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro identificacion_bodegaFinal no puede estar vacio'}}})
    id_bodegaFinal: number;

    @Expose({ name: "identificacion_Producto" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro identificacion_Producto es obligatorio'}}})
    @IsPositive({ message: ()=>{ throw { status: 400, message: 'El parametro identificacion_Producto debe ser positivo'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro identificacion_Producto debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro identificacion_Producto no puede estar vacio'}}})
    id_producto: number;

    @Expose({ name: "cantidad_Producto" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro cantidad_Producto es obligatorio'}}})
    @IsPositive({ message: ()=>{ throw { status: 400, message: 'El parametro cantidad_Producto debe ser positivo'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro cantidad_Producto debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro cantidad_Producto no puede estar vacio'}}})
    cantidad: number;

    @Expose({ name: "identificacion_Usuario" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro identificacion_Usuario es obligatorio'}}})
    @IsPositive({ message: ()=>{ throw { status: 400, message: 'El parametro identificacion_Usuario debe ser positivo'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro identificacion_Usuario debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro identificacion_Usuario no puede estar vacio'}}})
    created_by: number;

    constructor(data: Partial<validateTransladoProductos>){
     Object.assign(this, data);
    }
}