import express from "express";
import LivroController from "../controllers/livrosController.js";

const router = express.Router();
const uri = "livros";
const path = `/${uri}/`;

router
    .get(path, LivroController.listar)
    .get(path + "busca", LivroController.listarLivroPorEditora)
    .get(path + ":id", LivroController.listarPorId)
    .post(path, LivroController.cadastrar)
    .put(path + ":id", LivroController.atualizar)
    .delete(path + ":id", LivroController.excluir);

export default router;
