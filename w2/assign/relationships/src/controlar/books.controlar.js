const express = require("express");
const Book = require("../model/books.model");
const router = express.Router();
const crudController = require("./crud.controlar");

router.get("/", async (req, res) => {
    const  {isCheckedOut}  = req.query;
    let criteria = {};
    console.log(isCheckedOut);
    if (isCheckedOut === 'false') {
        criteria.isCheckedOut = isCheckedOut;
    }
    console.log(criteria)
    const item = await Book.find({criteria});
    console.log(criteria)
    res.status(200).json(item);
});

router.post("/", crudController(Book).createOne);
router.get("/:id", crudController(Book).getOne);
router.patch("/:id", crudController(Book).updateOne);
router.delete("/:id", crudController(Book).deleteOne);
module.exports = router;

