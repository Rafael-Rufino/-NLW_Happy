// importar depecndecias
const express = require('express');
const path = require('path');
const pages = require('./pages.js');

//iniciando o express (biblioteca)
const server = express()
server
    //utilizando body do req
    .use(express.urlencoded({ extended: true}))
    
    //Ultilizando os arquivos estaticos
    .use(express.static('public'))

    // configuração template engine
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'hbs')


    // rotas da aplicação
    .get('/', pages.index) 
    .get('/orphanage', pages.orphanage) 
    .get('/orphanages', pages.orphanages) 
    .get('/create-orphanage', pages.createOrphanage)
    .post("/save-orphanage", pages.saveOrphanage)
    
// ligar o servidor
server.listen(5500, () => {
    console.log("Server started");
  });














