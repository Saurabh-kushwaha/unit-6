const mongoose = require("mongoose");

const booksSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    body: { type: String, required: true, unique: true },
    author: [
        {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref:"author"
        }
    ], 
    section: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref:"section"
    },
    isCheckedOut:{type:Boolean, default:false}
});

const Book = mongoose.model("books", booksSchema);
module.exports = Book;