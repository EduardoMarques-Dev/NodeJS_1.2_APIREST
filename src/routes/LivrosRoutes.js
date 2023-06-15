import express from "express";
import LivroController from "../controllers/livrosController.js";

const router = express.Router();
const uri = "livros";
const path = `/${uri}/`;

router
  .get(path, LivroController.listarLivros)
  .get(path + "busca", LivroController.listarLivroPorEditora)
  .get(path + ":id", LivroController.listarLivroPorId)
  .post(path, LivroController.cadastrarLivro)
  .put(path + ":id", LivroController.atualizarLivro)
  .delete(path + ":id", LivroController.excluirLivro);

export default router;
