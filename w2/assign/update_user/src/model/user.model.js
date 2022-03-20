const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    user_array: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user",
        }
    ]
});
const User = mongoose.model("user", userSchema);
module.exports = User;