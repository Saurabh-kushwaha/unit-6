const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const authorControlar = require("./controlar/author.controlar");
const booksControlar = require("./controlar/books.controlar");
const sectionControlar = require("./controlar/section.controlar");

const PORT = 8000;


const DB_URL = "mongodb+srv://saurabh:saurabh123@cluster0.hmdwt.mongodb.net/relationships?retryWrites=true&w=majority";

const connect = () => {
    return mongoose.connect(DB_URL);
}

const app = express();
app.use(express.json());
app.use(cors());

app.use("/author", authorControlar);
app.use("/books", booksControlar);
app.use("/section", sectionControlar);

app.listen(PORT, async () => {
    try {
        await connect();
        console.log(`Server is working ${PORT}`);
    } catch (e) {
        console.log(e.message);
    }
})