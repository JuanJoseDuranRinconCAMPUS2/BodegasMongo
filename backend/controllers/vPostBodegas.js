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
export class validatePBodegas {
    constructor(data) {
        Object.assign(this, data);
    }
}
__decorate([
    Expose({ name: "identificacion_Bodega" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro identificacion_Bodega es obligatorio' }; } }),
    IsPositive({ message: () => { throw { status: 400, message: 'El parametro identificacion_Bodega debe ser positivo' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro identificacion_Bodega debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro identificacion_Bodega no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validatePBodegas.prototype, "_id", void 0);
__decorate([
    Expose({ name: "nombre_Bodega" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro nombre_Bodega es obligatorio' }; } }),
    MaxLength(255, { message: () => { throw { status: 400, message: 'El parametro nombre_Bodega debe tener como máximo 255 caracteres' }; } }),
    Matches(/^[A-Za-z0-9-\s.,!]+$/, { message: () => { throw { status: 400, message: 'El parametro nombre_Bodega debe ser una cadena de texto sin caracteres especiales excepto el "-' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro nombre_Bodega no puede estar vacio' }; } }),
    __metadata("design:type", String)
], validatePBodegas.prototype, "nombre", void 0);
__decorate([
    Expose({ name: "identificacion_Responsable" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro identificacion_Responsable es obligatorio' }; } }),
    IsPositive({ message: () => { throw { status: 400, message: 'El parametro identificacion_Responsable debe ser positivo' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro identificacion_Responsable debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro identificacion_Responsable no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validatePBodegas.prototype, "id_responsable", void 0);
__decorate([
    Expose({ name: "estado_Bodega" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro estado_Bodega es obligatorio' }; } }),
    IsPositive({ message: () => { throw { status: 400, message: 'El parametro estado_Bodega debe ser positivo' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro estado_Bodega debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro estado_Bodega no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validatePBodegas.prototype, "estado", void 0);
__decorate([
    Expose({ name: "identificacion_Usuario" }),
    IsDefined({ message: () => { throw { status: 400, message: 'El parametro identificacion_Usuario es obligatorio' }; } }),
    IsPositive({ message: () => { throw { status: 400, message: 'El parametro identificacion_Usuario debe ser positivo' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro identificacion_Usuario debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro identificacion_Usuario no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], validatePBodegas.prototype, "created_by", void 0);
