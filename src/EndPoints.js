
import  {dobro,somar,media,temp, corsimcornao, ingresso, FreqCaracter, tabuada} from './Services.js'

import { Router } from 'express'
const server = Router();



server.get('/ping', (req,resp) =>{
    resp.send('pong');
})

server.get('/dobro/:numero' ,(req,resp)=>{
    const numero = Number(req.params.numero);
    const d = dobro(numero)
    

    resp.send({
        dobro: d
    }); 

})

server.get('/somar', (req,resp) => {
    
    let {a,b} =req.body;

    const d = somar(a,b)
    resp.send({
        soma:d
    });
})

server.post('/somar', (req,resp)=> {
    try{
        const{valores:{a,b}} = req.body


    const d = somar(a,b)
    resp.send({
        soma:d
    })
} catch(err){
    resp.status(404).send({
        erro: err.message
    })

}
})

server.post('/temp',(req,resp)=>{
    const a = req.body;

    const d = temp (a);
    resp.send({
        temp:d
    })
})

server.get('/temp/:numero' ,(req,resp)=>{
    const numero = Number(req.params.numero);
    const d = temp(numero)

    resp.send({
        temp: d
    }); 

})

server.post('/media', (req,resp)=>{
    const {a, b, c} = req.body;
    
    const x = media(a, b, c);
    resp.send({
        media: x
    });
})
server.get('/corsimcornao/:cor', (req,resp)=>{
     const cor = req.params.cor;
     const x = corsimcornao(cor);

     resp.send({
         corsimcornao: x
     });

})
server.post('/ingresso', (req,resp)=>{
    const {dia:dia, inteira:inteira, meia:meia, nacionalidade:nacionalidade} = req.body;
    const x = ingresso(String(dia), inteira, meia, String(nacionalidade));

    resp.send({
        ingresso: x
    });
})

server.get('/FreqCaracter/:texto/:caracter', (req,resp) =>{
    const texto = req.params.texto;
    const caracter = req.params.caracter;
    const x = FreqCaracter(texto, caracter);

    resp.send({
        FreqCaracter: x
    });
})

server.post('/tabuada', (req,resp) =>{
    const numero = req.body;
    const x = tabuada(numero);

    resp.send({
        tabuada:x
    });
})

export default server;