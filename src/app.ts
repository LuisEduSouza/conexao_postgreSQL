import express from "express";
import cors from 'cors';
import { DatabaseModel } from "./model/DatabaseModel";

//definindo a porta do servidor
const port: number = 3333;

// criando servidor web
const server = express();
server.use(cors());
server.use(express.json());

//rotas a aplicação
server.get('/',(req,res) => {
    res.json({ messagem: "Olá, mundo!, esta é a minha primeira aplicação web :)"});
});

server.get('/pessoas',(req,res) => {
    res.json({messagem:'Aqui será apresentado os dados das pessoas.'});
});

new DatabaseModel().testeConexao().then((resdb) => {
    if(resdb){
        console.log('Conexão com banco de dados realizada com sucesso.');
        // iniciando o servidor
        server.listen(port, ()  => {
            console.log(`Servidor iniciado no endereço http://localhost:${port}`);
        });
    } else{
        console.log('Erro ao conectar ao banco de dados.');
    }
});