/*================================================
# INICIALIZANDO AS CONSTANTES
#=================================================*/

const express = require('express');
const app = express();

/*================================================
# SERVIDOR
#=================================================*/

app.listen(8081, function(){
    console.log("Servidor Rodando na url http://localhost:8081");
});