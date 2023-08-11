import dotnev from 'dotenv';
import express from 'express';


console.clear();
dotnev.config();

const BodegasApi = express();
BodegasApi.use(express.json());

// ════════ ⋆★⋆ ════════
// AlquilerApi.use('/Colecciones', AppColecciones);
// ════════ ⋆★⋆ ════════

const config = JSON.parse(process.env.MY_CONFIG);
BodegasApi.listen(config, ()=>{console.log(`http://${config.hostname}:${config.port}`);})