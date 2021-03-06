const express = require ('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const cadastros = {
};

app.get('/emails', (req,res)=>{
    res.send(cadastros);
});

app.post('/cadastrar', (req,res)=>{
    if (!req.body.nome || !req.body.email){
        return res.status(400).send({mensagem: 'email e nome obrigatórios'})

    }
    cadastros [req.body.nome] = req.body.email;
    res.send({mensagem: 'cadastro realizado com sucesso'});
});

app.listen(3000, ()=> console.log('aplicação iniciada.'));
