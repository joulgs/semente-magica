import express from 'express';

// inicia um servidor express
const app = express();

// encontra o ip local da maquina
 
// define a porta do servidor
const port = 3000;
// define a rota inicial
app.get('/', (req, res) => {
    res.send('Hello World!');
});
// inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});





// 

console.log("Eu..? Eu Estou Vivo Muahahahaha !!!")