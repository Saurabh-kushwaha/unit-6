const express = require("express");
const Section = require("../model/section.model");
const Book = require("../model/books.model");
const router = express.Router();
const crudController = require("./crud.controlar");

router.get("/:id/books", async (req, res) => {
    const books = await Book.find({
        authors: req.params.id,
    })
    res.status(200).json(books);
});

router.get("/", crudController(Section).getAll);
router.post("/", crudController(Section).createOne);
router.patch("/:id", crudController(Section).updateOne);
router.delete("/:id", crudController(Section).deleteOne);

module.exports = router;
