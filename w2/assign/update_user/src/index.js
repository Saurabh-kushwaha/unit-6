const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const userController = require("./controlar/user.controlar");
const DB_URL = "mongodb+srv://saurabh:saurabh123@cluster0.hmdwt.mongodb.net/update_user_ass?retryWrites=true&w=majority"

const PORT = 8000;
const app = express();
app.use(express.json());
app.use(cors());

app.use("/user", userController);


const connect = () => {
    return mongoose.connect(DB_URL);
}

app.listen(PORT, async () =>{
   try{    
        await connect();
        console.log(`Server is working on ${PORT}`);
   } catch (e) {
       console.log(e.message);
    }
});