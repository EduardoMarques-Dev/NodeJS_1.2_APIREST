import mongoose from "mongoose";
import ErroBase from "../src/erros/ErroBase.js";
import ErroValidacao from "../src/erros/ErroValidacao.js";
import NaoEncontrado from "../src/erros/NaoEncontrado.js";
import RequisicaoIncorreta from "../src/erros/RequisicaoIncorreta.js";

// eslint-disable-next-line no-unused-vars
function manipuladorDeErros(erro, req, res, next) {
  console.log(erro);  // imprime o erro para a pessoa desenvolvedora

  if (erro instanceof mongoose.Error.CastError){
    new RequisicaoIncorreta().enviarResposta(res);
  } else if (erro instanceof mongoose.Error.ValidationError) {
    new ErroValidacao(erro).enviarResposta(res);
  } else if (erro instanceof NaoEncontrado) {
    erro.enviarResposta(res);
  } else {
    new ErroBase().enviarResposta(res);
  }
}

export default manipuladorDeErros;