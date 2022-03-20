const express = require("express");
const Author = require("../model/author.model");
const Book = require("../model/books.model");
const router = express.Router();

const crudController = require("./crud.controlar");

router.get("/:id/books", async (req, res) => {
    const books = await Book.find({
        authors: req.params.id,
    })
    res.status(200).json(books);
});

router.get("/", crudController(Author).getAll);
router.get("/:id", crudController(Author).getOne);
router.post("/", crudController(Author).createOne);
router.patch("/:id", crudController(Author).updateOne);
router.delete("/:id", crudController(Author).deleteOne);

module.exports = router;