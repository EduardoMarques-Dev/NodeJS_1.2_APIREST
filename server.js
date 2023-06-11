/*================================================
# INICIALIZANDO AS CONSTANTES
#=================================================*/

// const express = require('express');
// const app = express();

const http = require('http');
const port = 8081;

const rotas = {
    '/': 'Curso de Node',
    '/livros': 'Entrei na pag de livros',
    '/autores': 'Listagem de autores',
    '/sobre': 'Info sobre o projeto'  
}

/*================================================
# SERVIDOR
#=================================================*/

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type':'text/plain'});
    res.end(rotas[req.url]);
})

server.listen(port, () => {
     console.log(`Servidor escutando na url http://localhost:${port}`);
})

// app.listen(port, function(){
//     console.log(`Servidor escutando na url http://localhost:${port}`);
// });