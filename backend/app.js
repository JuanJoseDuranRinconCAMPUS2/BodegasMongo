import dotnev from 'dotenv';
import express from 'express';
import AppGBodegas from './routes/GetBodegas.js';

console.clear();
dotnev.config();

const BodegasApi = express();
BodegasApi.use(express.json());

// ════════ ⋆★⋆ ════════
BodegasApi.use('/GetBodegas', AppGBodegas);
// ════════ ⋆★⋆ ════════

const config = JSON.parse(process.env.MY_CONFIG);
BodegasApi.listen(config, ()=>{console.log(`http://${config.hostname}:${config.port}`);})