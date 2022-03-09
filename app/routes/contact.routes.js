const express = require("express");
const { app } = require("../config");
const contacts = require("../controllers/contact.controller");

module.exports = (app) => {
    const router = express.Router();

    router.get("/", contacts.findAll);

    router.post("/", contacts.create);

    router.delete("/", contacts.deleteAll);

    router.get("/favorite", contacts.findAllFavorite);

    router.get("/:id", contacts.findOne);

    router.put("/:id", contacts.update);

    router.delete("/:id", contacts.deletd);

    app.use("/api/contacts", router);
};