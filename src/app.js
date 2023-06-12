import express from "express";

const app = express();
const livros = [
    {id: 1, "titulo": "Senhor dos Aneis"},
    {id: 2, "titulo": "O Hobbit"}
]

// recurso que interpreta a entrada e saída de dados em json 
app.use(express.json())

/*================================================
# ROTAS
#=================================================*/

app.get('/', (req, res) => {
    res
        .status(200)
        .send('Curso de Node');
});

/*================================================
# LIVROS
#=================================================*/

app.get('/livros', (req, res) => {
    res
        .status(200)
        .json(livros);
});

app.get('/livros/:id', (req, res) => {
    let {id} = req.params;
    let index = buscaLivro(id);
    
    res
        .status(200)
        .json(livros[index]);
});

app.post('/livros', (req, res) => {
    livros.push(req.body);
    res
        .status(201)
        .send("Livro cadastrado com sucesso");
});

app.put('/livros/:id', (req, res) => {
    let {id} = req.params;
    let index = buscaLivro(id);
    livros[index].titulo = req.body.titulo;

    res
        .status(200)
        .json(livros);
});

app.delete('/livros/:id', (req, res) => {
    let {id} = req.params;
    let index = buscaLivro(id);
    livros.splice(index, 1);

    res
        .status(200)
        .send(`Livro ${id} removido com sucesso.`);
});

function buscaLivro(id) {
    return livros.findIndex(livro => livro.id == id);
}

export default app;
