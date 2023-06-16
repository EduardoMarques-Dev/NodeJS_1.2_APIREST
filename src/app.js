import express from "express";
import manipulador404 from "../middlewares/manipulador404.js";
import manipuladorDeErros from "../middlewares/manipuladorDeErros.js";
import db from "./config/dbConnect.js";
import routes from "./routes/index.js";

/*================================================
# Conexão com banco de dados
#=================================================*/

// Verifica se houve algum erro de conexão
db.on("error", console.log.bind(console, "Erro de conexão"));
// Instrução para abrir a conexão
db.once("open", () => {
  console.log("conexão com o banco feita com sucesso");
});

/*================================================
# Inicialização de variáveis e constantes
#=================================================*/

const app = express();

/*================================================
# Middlewares
#=================================================*/

// utilizando o express nas rotas
routes(app);

app.use(manipulador404);
app.use(manipuladorDeErros);


export default app;
