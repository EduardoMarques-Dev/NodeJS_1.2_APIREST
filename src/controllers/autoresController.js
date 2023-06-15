import autores from "../models/Autor.js";

class AutorController {

  static listar = async (req, res) => {
    try {
      const autorList = await autores.find();

      res.status(200).json(autorList);
    } catch (error) {
      res.status(500).json({message: "Erro interno no servidor"});
    }
  };

  static listarPorId = async (req, res) => {
    try {
      const id = req.params.id;
      const autor = await autores.findById(id);

      res.status(200).send(autor);
    } catch (error) {
      res.status(400).send({message: `${error.message} - Id do autor não localizado.`});
    }
  };

  static cadastrar = async (req, res) => {
    try {
      let autor = new autores(req.body);
      autor = await autor.save(autor);

      res.status(201).send(autor.toJSON());
    } catch (error) {
      res.status(500).send({message: `${error.message} - falha ao cadastrar autor.`});
    }
  };

  static atualizar = async (req, res) => {
    try {
      const id = req.params.id;
      await autores.findByIdAndUpdate(id,{$set: req.body});

      res.status(200).send({message: "Autor atualizado com sucesso"});
    } catch (error) {
      res.status(500).send({message: error.message});
    }
  };

  static excluir = async (req, res) => {
    try {
      const id = req.params.id;
      await autores.findByIdAndDelete(id);

      res
        .status(200)
        .send({message: "Autor removido com sucesso"});
    } catch (error) {
      res
        .status(500)
        .send({message: error.message});
    }
  };
}

export default AutorController;