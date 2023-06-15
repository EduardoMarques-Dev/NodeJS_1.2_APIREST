import express from "express";
import AutorController from "../controllers/autoresController.js";

const router = express.Router();
const uri = "autores"

router
    .get(`/${uri}`, AutorController.listar)
    .get(`/${uri}/:id`, AutorController.listarPorId)
    .post(`/${uri}`, AutorController.cadastrar)
    .put(`/${uri}/:id`, AutorController.atualizar)
    .delete(`/${uri}/:id`, AutorController.excluir);

export default router;
