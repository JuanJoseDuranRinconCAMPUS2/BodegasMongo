import dotnev from 'dotenv';
import express from 'express';
import AppGBodegas from './routes/GetBodegas.js';
import AppPBodegas from './routes/PostBodegas.js';
import AppGProductos from './routes/GetProductosXTotal.js';
import AppProductoInv from './routes/PostProductoInv.js';
import AppPInven from './routes/PostInventarios.js';
import AppTransladoProduct from './routes/TransladoProductos.js';
import AppCrearUsuario from './routes/CrearUsuarios.js';
import AppIngresoUsuario from './routes/IngresoUsuario.js';
import { proxyAutorizacionTk } from './middleware/proxyManejoTokens.js';
console.clear();
dotnev.config();

const BodegasApi = express();
BodegasApi.use(express.json());


//Rutas de manejo de colecciones
// ════════ ⋆★⋆ ════════
BodegasApi.use('/GetBodegas', proxyAutorizacionTk, AppGBodegas);
BodegasApi.use('/PostBodegas', proxyAutorizacionTk, AppPBodegas);
BodegasApi.use('/GetProductosXTotal', proxyAutorizacionTk, AppGProductos);
BodegasApi.use('/PostProductoInventario', proxyAutorizacionTk, AppProductoInv);
BodegasApi.use('/PostInventario', proxyAutorizacionTk, AppPInven);
BodegasApi.use('/TransladoProductos', proxyAutorizacionTk, AppTransladoProduct);
// ════════ ⋆★⋆ ════════

//Rutas de validacion
// ════════ ⋆★⋆ ════════
BodegasApi.use('/CrearUsuario', AppCrearUsuario);
BodegasApi.use('/IngresarUsuario', AppIngresoUsuario);
// ════════ ⋆★⋆ ════════

const config = JSON.parse(process.env.MY_CONFIG);
BodegasApi.listen(config, ()=>{console.log(`http://${config.hostname}:${config.port}`);})