var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Expose } from "class-transformer";
import { IsDefined, IsNumber, IsPositive, IsNotEmpty } from 'class-validator';
export class validatePInventarios {
    constructor(data) {
        Object.assign(this, data);
    }
}
__decorate([
    Expose({ name: "identificacion_Inventario" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro identificacion_Inventario es obligatorio' }; } }),
    IsPositive({ message: () => { throw { status: 400, message: 'El parametro identificacion_Inventario debe ser positivo' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro identificacion_Inventario debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro identificacion_Inventario no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validatePInventarios.prototype, "_id", void 0);
__decorate([
    Expose({ name: "identificacion_Bodega" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro identificacion_Bodega es obligatorio' }; } }),
    IsPositive({ message: () => { throw { status: 400, message: 'El parametro identificacion_Bodega debe ser positivo' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro identificacion_Bodega debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro identificacion_Bodega no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validatePInventarios.prototype, "id_bodega", void 0);
__decorate([
    Expose({ name: "identificacion_Producto" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro identificacion_Producto es obligatorio' }; } }),
    IsPositive({ message: () => { throw { status: 400, message: 'El parametro identificacion_Producto debe ser positivo' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro identificacion_Producto debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro identificacion_Producto no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validatePInventarios.prototype, "id_producto", void 0);
__decorate([
    Expose({ name: "cantidad_Producto" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro cantidad_Producto es obligatorio' }; } }),
    IsPositive({ message: () => { throw { status: 400, message: 'El parametro cantidad_Producto debe ser positivo' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro cantidad_Producto debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro cantidad_Producto no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validatePInventarios.prototype, "cantidad", void 0);
__decorate([
    Expose({ name: "identificacion_Usuario" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro identificacion_Usuario es obligatorio' }; } }),
    IsPositive({ message: () => { throw { status: 400, message: 'El parametro identificacion_Usuario debe ser positivo' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro identificacion_Usuario debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro identificacion_Usuario no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validatePInventarios.prototype, "created_by", void 0);
