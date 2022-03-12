const express = require("express");
let users = require("./users.json");
const PORT = 8000;
const app = express();
app.use(express.json());

app.get("/get", (req, res) => {
    res.write("Welcome to Home page");
    res.end();
});

app.get("/get/users", (req, res) => {
    res.json(users);
})

app.post("/post/users", (req, res) => {
    users.push(req.body);
    res.json(req.body);
})

app.patch("/patch/user", (req, res) => {
    const { id } = req.params;
    users = users.map((user) => {
        if (user.id === +id) {
            user = {...user, ...req.body}   
        }
        return user;
    })
    res.json(req.body);
});

app.delete("/delete/user", (req, res) => {
    const { id } = req.params;
    users = users.map((user) => {
        user.id !== +id;
    });
    res.json(req.body);
});

app.listen(PORT, () => {
    console.log(`PORT ADDRESS ${PORT}`); 
});