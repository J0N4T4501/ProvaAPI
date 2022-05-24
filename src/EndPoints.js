
import  {dobro,somar,media,temp, dobro} from './f1.js'
import 'dotenv/config'
import { Router } from 'express'


const server =Router();





server.get('/ping', (req,resp) =>{
    resp.send('pong');
})

server.get('/dobro/:numero' ,(req,resp)=>{
    let numero = Number(req.params.numero);
    let dobro = dobro(numero)
    

    resp.send({
        dobro: dobro
    }) 

})

server.get('/somar', (req,resp) => {
    
    let {a,b} =req.body;

    const d = somar(a,b)
    resp.send({
        soma:d
    })
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

    const d = temp (a)
    resp.send({
        temp:d
    })
})

export default server;