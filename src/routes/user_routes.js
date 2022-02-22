const express = require("express");
const userSchema = require("../models/user.js");
const router = express.Router();

//Crear usuarios
router.post("/user", (req, res) => {
  const user = userSchema(req.body);
  user
    .save()
    .then((data) => res.json(data))
    .catch((err) => res.json({ message: err }));
});

//Listar usuarios
router.get("/users", (req, res) => {
  userSchema
    .find()
    .then((data) => res.json(data))
    .catch((err) => res.json({ message: err }));
});

//Mostrar info de usuario específico
router.get("/users/:id", (req, res) => {
  const { id } = req.params;

  userSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((err) => res.json({ message: err }));
});

//Eliminar un usuario específico
router.delete("/users/:id", (req, res) => {
  const { id } = req.params;

  userSchema
    .deleteOne({ _id: id })
    .then((data) => res.json(data))
    .catch((err) => res.json({ message: err }));
});

//Editar un recurso específico
router.put("/users/:id", (req, res) => {
  const { id } = req.params;
  const { name, lastname, bank_account, address } = req.body;

  userSchema
    .updateOne({ _id: id }, { $set: { name, lastname, bank_account, address } })
    .then((data) => res.json(data))
    .catch((err) => res.json({ message: err }));
});

module.exports = router;
