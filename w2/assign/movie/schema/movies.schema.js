const mongoose = require("mongoose");

const moviesSchema = new mongoose.Schema({
    movie_name: String,
    movie_genre: String,
    production_year: Number,
    budget: Number
});

const Movie = mongoose.model("movies", moviesSchema);
module.exports = Movie;