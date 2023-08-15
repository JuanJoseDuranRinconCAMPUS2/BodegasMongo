import { Expose, Type, Transform } from "class-transformer";
import { IsDefined, MaxLength, IsNumber, IsPositive, IsNotEmpty, Matches, IsString} from 'class-validator';

export class validatePInventarios{

    @Expose({ name: "identificacion_Inventario" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro identificacion_Inventario es obligatorio'}}})
    @IsPositive({ message: ()=>{ throw { status: 400, message: 'El parametro identificacion_Inventario debe ser positivo'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro identificacion_Inventario debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro identificacion_Inventario no puede estar vacio'}}})
    _id: number;

    @Expose({ name: "identificacion_Bodega" })
    @IsDefined({ message: ()=>{ throw { status: 400, message: 'El parametro identificacion_Bodega es obligatorio'}}})
    @IsPositive({ message: ()=>{ throw { status: 400, message: 'El parametro identificacion_Bodega debe ser positivo'}}})
    @IsNumber({}, { message: ()=>{ throw { status: 400, message: 'El parametro identificacion_Bodega debe ser un numero'}}})
    @IsNotEmpty({ message: ()=>{ throw { status: 400, message: 'El parametro identificacion_Bodega no puede estar vacio'}}})
    id_bodega: number;

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

    constructor(data: Partial<validatePInventarios>){
     Object.assign(this, data);
    }
}