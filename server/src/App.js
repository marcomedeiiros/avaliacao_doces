import express from 'express';  // importar o express 
import DoceController from './Controllers/DoceController.js';

const server = express(); // iniciando o express

server.use(express.json()) // configurando json

server.get('/', (req,res)=>{
    res.status(200).json("Servidor Funcionando");
});

server.get('/Doces',DoceController.read);
server.post('/Doces', DoceController.create);
server.put('/Doces/:id_Doce',DoceController.update);
server.delete('/Doces/:index', DoceController.delete);

server.listen(5000);