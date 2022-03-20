const express = require("express");
const User = require("../model/user.model");
const router = express.Router();

router.get("/", async (req, res) => {
    const getuser = await User.find();
    res.status(200).json(getuser);
});
router.get("/:id", async (req, res) => {
    const getuser = await User.findById(req.params.id);
    res.status(200).json(getuser);
});

router.patch("/:id", async (req, res) => {
    const updateUser = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    })
    res.status(200).json(updateUser);
});

router.post("/", async (req, res) => {
    const createUser = await User.create(req.body);
    res.status(201).json(createUser);
})

module.exports = router;