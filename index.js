import express from "express";
import {
  getLibros,
  getLibrosByFilter,
  getLibrosByID,
  prepararFiltros,
} from "./consultas.js";

const app = express();

app.listen(3000, () => console.log("Servidor levantado en el puerto 3000"));

app.get("/libros", async (req, res) => {
  try {
    const libros = await getLibros();

    res.json(libros);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.get("/libro/:id", async (req, res) => {
  try {
    const libros = await getLibrosByID(req.params);
    res.json(libros);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.get("/libros/filtros", async (req, res) => {
  try {
    const [filtros, values] = prepararFiltros(req.query);
    console.log(req.query);
    const libros = await getLibrosByFilter(filtros, values);
    res.json(libros);
  } catch (error) {
    res.status(500).send(error.message);
  }
});
