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
import { IsDefined, MaxLength, IsNumber, IsPositive, IsNotEmpty, Matches } from 'class-validator';
export class validatePProductoInventario {
    constructor(data) {
        Object.assign(this, data);
    }
}
__decorate([
    Expose({ name: "identificacion_Producto" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro identificacion_Producto es obligatorio' }; } }),
    IsPositive({ message: () => { throw { status: 400, message: 'El parametro identificacion_Producto debe ser positivo' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro identificacion_Producto debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro identificacion_Producto no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validatePProductoInventario.prototype, "_id", void 0);
__decorate([
    Expose({ name: "nombre_Producto" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro nombre_Producto es obligatorio' }; } }),
    MaxLength(255, { message: () => { throw { status: 400, message: 'El parametro nombre_Producto debe tener como máximo 255 caracteres' }; } }),
    Matches(/^[A-Za-z0-9-\s.,!]+$/, { message: () => { throw { status: 400, message: 'El parametro nombre_Producto debe ser una cadena de texto sin caracteres especiales excepto el "-' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro nombre_Producto no puede estar vacio' }; } }),
    __metadata("design:type", String)
], validatePProductoInventario.prototype, "nombre", void 0);
__decorate([
    Expose({ name: "descripcion_Producto" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro descripcion_Producto es obligatorio' }; } }),
    MaxLength(255, { message: () => { throw { status: 400, message: 'El parametro descripcion_Producto debe tener como máximo 255 caracteres' }; } }),
    Matches(/^[A-Za-z0-9-\s.,!]+$/, { message: () => { throw { status: 400, message: 'El parametro descripcion_Producto debe ser una cadena de texto sin caracteres especiales excepto el "-' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro descripcion_Producto no puede estar vacio' }; } }),
    __metadata("design:type", String)
], validatePProductoInventario.prototype, "descripcion", void 0);
__decorate([
    Expose({ name: "estado_Producto" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro estado_Producto es obligatorio' }; } }),
    IsPositive({ message: () => { throw { status: 400, message: 'El parametro estado_Producto debe ser positivo' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro estado_Producto debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro estado_Producto no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validatePProductoInventario.prototype, "estado", void 0);
__decorate([
    Expose({ name: "identificacion_Usuario" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro identificacion_Usuario es obligatorio' }; } }),
    IsPositive({ message: () => { throw { status: 400, message: 'El parametro identificacion_Usuario debe ser positivo' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro identificacion_Usuario debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro identificacion_Usuario no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validatePProductoInventario.prototype, "created_by", void 0);
