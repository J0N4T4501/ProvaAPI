
import  {dobro,somar,media,temp, corsimcornao, ingresso, freqCaracter, tabuada, maiorNumero} from './Services.js'

import { Router } from 'express'
const server = Router();



server.get('/ping', (req,resp) =>{
    resp.send('pong');
})

server.get('/dia2/dobro/:numero' ,(req,resp)=>{
    try{
    const numero = Number(req.params.numero);
    const d = dobro(numero)
    

    resp.send({
        dobro: d
    }); 
}
catch(err){
    resp.status(404).send({
        erro: err.message
    })
}

})

server.get('/dia2/somar', (req,resp) => {
    try{
    let {a,b} =req.body;

    const d = somar(a,b)
    resp.send({
        soma:d
    });
}catch(err){
   
    resp.status(404).send({
            erro: err.message
        })
    
}
})

server.post('/dia2//somar', (req,resp)=> {
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

server.post('/dia2/temp',(req,resp)=>{
    try{
    const a = req.body;

    const d = temp (a);
    resp.send({
        temp:d
    })
}catch(err){
    resp.status(404).send({
        erro: err.message
    })
}
})

server.get('/dia2/temp/:numero' ,(req,resp)=>{
    try{
    const numero = Number(req.params.numero);
    const d = temp(numero)

    resp.send({
        temp: d
    }); 
}catch(err){
    resp.status(404).send({
        erro: err.message
    })
}

})

server.post('/dia2/media', (req,resp)=>{
    try{
    const {a, b, c} = req.body;
    
    const x = media(a, b, c);
    resp.send({
        media: x
    });
}catch(err){
    resp.status(404).send({
        erro: err.message
    })
}
})
server.get('/dia2/corsimcornao/:cor', (req,resp)=>{
    try{
     const cor = req.params.cor;
     const x = corsimcornao(cor);

     resp.send({
         corsimcornao: x
     });

    }catch(err){
        resp.status(404).send({
            erro: err.message
        })
    }

})
server.post('/dia2/ingresso', (req,resp)=>{
    try{
    const {dia:dia, inteira:inteira, meia:meia, nacionalidade:nacionalidade} = req.body;
    const total = ingresso(String(dia), inteira, meia, String(nacionalidade));

    resp.send({
        total: total
    });
}catch(err){
    resp.status(404).send({
        erro: err.message
    })
}
})

server.get('/dia2/freqCaracter/:texto/:caracter', (req,resp) =>{
    try{
    const texto = req.params.texto;
    const caracter = req.params.caracter;
    const freq = freqCaracter(texto, caracter);

    resp.send({
        freq: freq
    });
}catch(err){
    resp.status(404).send({
        erro:err.message
    })
}
})

server.get('/tabuada', (req,resp) =>{
    const numero = req.params.numero;
    const x = tabuada(numero);

    resp.send({
        tabuada: x
    });
})

server.post('/dia2/maiorNumero/', (req,resp) =>{
    const numeros = req.body;
    const x = maiorNumero(numeros);

    resp.send({
        maiorNumero: x
    })
})

export default server;