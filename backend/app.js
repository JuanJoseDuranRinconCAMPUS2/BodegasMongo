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
console.clear();
dotnev.config();

const BodegasApi = express();
BodegasApi.use(express.json());


//Rutas de manejo de colecciones
// ════════ ⋆★⋆ ════════
BodegasApi.use('/GetBodegas', AppGBodegas);
BodegasApi.use('/PostBodegas', AppPBodegas);
BodegasApi.use('/GetProductosXTotal', AppGProductos);
BodegasApi.use('/PostProductoInventario', AppProductoInv);
BodegasApi.use('/PostInventario', AppPInven);
BodegasApi.use('/TransladoProductos', AppTransladoProduct);
// ════════ ⋆★⋆ ════════

//Rutas de validacion
// ════════ ⋆★⋆ ════════
BodegasApi.use('/CrearUsuario', AppCrearUsuario);
BodegasApi.use('/IngresarUsuario', AppIngresoUsuario);
// ════════ ⋆★⋆ ════════

const config = JSON.parse(process.env.MY_CONFIG);
BodegasApi.listen(config, ()=>{console.log(`http://${config.hostname}:${config.port}`);})