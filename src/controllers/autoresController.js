import autores from "../models/Autor.js";

class AutorController {

  static listar = async (req, res, next) => {
    try {
      const autorList = await autores.find();

      res.status(200).json(autorList);
    } catch (error) {
      next(error);
    }
  };

  static listarPorId = async (req, res, next) => {
    try {
      const id = req.params.id;
      const autor = await autores.findById(id);

      

      res.status(200).send(autor);
    } catch (error) {
      next(error);
    }
  };

  static cadastrar = async (req, res, next) => {
    try {
      let autor = new autores(req.body);
      autor = await autor.save(autor);

      res.status(201).send(autor.toJSON());
    } catch (error) {
      next(error);
    }
  };

  static atualizar = async (req, res, next) => {
    try {
      const id = req.params.id;
      await autores.findByIdAndUpdate(id,{$set: req.body});

      res.status(200).send({message: "Autor atualizado com sucesso"});
    } catch (error) {
      next(error);
    }
  };

  static excluir = async (req, res, next) => {
    try {
      const id = req.params.id;
      await autores.findByIdAndDelete(id);

      res.status(200).send({message: "Autor removido com sucesso"});
    } catch (error) {
      next(error);
    }
  };
}

export default AutorController;