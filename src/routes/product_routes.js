const express = require("express");
const productSchema = require("../models/products");
const router = express.Router();

//Crear la ruta para la creación de productos

router.post("/products", (req, res) => {
  const product = productSchema(req.body);
  product
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//Listar los productos existentes
router.get("/products", (req, res) => {
  productSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//Mostrar info de producto específico
router.get("/products/:id", (req, res) => {
  const { id } = req.params;
  productSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//Eliminar un usuario específico
router.delete("/products/:id", (req, res) => {
  const { id } = req.params;
  productSchema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//Editar un recurso específico
router.put("/products/:id", (req, res) => {
  const { id } = req.params;
  const { product_name, image, price, quantity, avaiable } = req.body;
  productSchema
    .updateOne({ _id: id }, { $set: { product_name, image, price, quantity, avaiable } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
