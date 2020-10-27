// importando bibliotecas
const express = require('express');
const path = require('path');

// importando a renderização das páginas
const pages = require('./pages.js');

// iniciando o express
const server = express();

// criar rotas
server

    // usar body do request
    .use(express.urlencoded({ extended: true }))

    // utilizando os arquivos estáticos
    .use(express.static('public'))

    // configurar Template Engine
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'hbs')

    // criar rotas da aplicação
    .get('/', pages.index)
    .get('/register', pages.register)
    .get('/login-failed', pages.loginFailed)
    .get('/login-succeeded', pages.loginSucceeded)
    .get('/users', pages.users)
    .post('/register-user', pages.registerUser)
    .post('/verify-user', pages.verifyUser)

// ligar o servidor
server.listen(5500)