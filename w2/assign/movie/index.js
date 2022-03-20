const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Movie = require("./schema/movies.schema");
const PORT = 8000;
const app = express();
app.use(express.json());
app.use(cors());

const DB_URL = "mongodb://127.0.0.1:27017/entertainment";

const connect = () => {
    return mongoose.connect(DB_URL);
}

app.get("/movies", async (req, res) => {
    const getAll = await Movie.find();
    res.status(200).json(getAll);
});

app.post("/movies", async (req, res) => {
    const createOne = await Movie.create(req.body);
    res.status(200).json(createOne);
});

app.get("/movies/:id", async (req, res) => {
    const getOne = await Movie.findById(req.params.id);
    res.status(200).json(getOne);
});

app.patch("/movies/:id", async (req, res) => {
    const updateOne = await Movie.findOneAndUpdate(req.params.id, req.body, {
        new: true
    });
    res.status(200).json(updateOne);
});

app.delete("/movies/:id", async (req, res) => {
    const deleteOne = await Movie.findByIdAndDelete(req.params.id);
    res.status(200).json(deleteOne);
});

app.listen(PORT, async () => {
    try {
        await connect();
        console.log(`Server working on ${PORT}`);   
    } catch(e) {
        console.log(e.message);
    }
});