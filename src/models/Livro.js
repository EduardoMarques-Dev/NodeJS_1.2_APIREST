import mongoose from "mongoose";

const livroSchema = new mongoose.Schema(
    {
        id: {type: String},
        titulo: {type: String, required: true},
        id: {type: String, required: true},
        editora: {type: String, required: true},
        numeroPaginas: {type: Number}
    }
);

// cria o a tabela caso não exista
const livros = mongoose.model('livros', livroSchema);

export default livros;