const express = require("express");
let books = require("./books.json");

const PORT = 8000;
let app = express();
app.use(express.json());

function middleware(massage) {
    return function middleware2(req, res, next) {
        req.querrybydev = massage
        next();

    }
}

app.use(middleware("Saurabh"))

app.get("/", (req, res) => {
    res.json({
        books: books,
        apiRequestedBy: req.querrybydev
    }); 
});

app.post("/books", (req, res) => {
    console.log("post to /books", req.body);
    books.push(req.body);
    res.json(req.body);
}); 

app.get("/books/:id", (req, res) => {
    const { id } = req.params;
    const book = books.find((book) => book.id === Number.parseInt(id));
    res.json(book);
});

app.patch("/books/:id", (req, res) => {
    const { id } = req.params;
    books = books.map((user) => {
    if (user.id === +id) {
      user = { ...user, ...req.body };
    }
    return user;
    });
    res.json(req.body);
});

app.delete("/books/:id", (req, res) => {
    const { id } = req.params;
    books = books.filter((book) => book.id !== +id);
    res.json(req.body);
});


app.listen(PORT, () => {
    console.log(`Port is working ${PORT}`);
});