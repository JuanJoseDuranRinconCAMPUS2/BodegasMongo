import dotnev from 'dotenv';
import express from 'express';
import AppGBodegas from './routes/GetBodegas.js';
import AppPBodegas from './routes/PostBodegas.js';
console.clear();
dotnev.config();

const BodegasApi = express();
BodegasApi.use(express.json());

// ════════ ⋆★⋆ ════════
BodegasApi.use('/GetBodegas', AppGBodegas);
BodegasApi.use('/PostBodegas', AppPBodegas);

// ════════ ⋆★⋆ ════════

const config = JSON.parse(process.env.MY_CONFIG);
BodegasApi.listen(config, ()=>{console.log(`http://${config.hostname}:${config.port}`);})