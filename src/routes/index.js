import express from "express";
import livrosRoutes from "./LivrosRoutes.js";
import autoresRoutes from "./AutoresRoutes.js";
import manipulador404 from "../../middlewares/manipulador404.js";

const routes = (app) => {
  app.route("/", (req, res) => {
    res.status(200).send("Curso de Node");
  });

  app.use(
    express.json(), // interpreta input/output em json
    livrosRoutes,
    autoresRoutes
  );
};

export default routes;