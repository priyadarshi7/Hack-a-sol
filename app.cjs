const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
// const mongoose = require("mongoose");

// async function main() {
//     await mongoose.connect('mongodb://127.0.0.1:27017/online');
// }

// main().then(() => {
//     console.log("Connection Established!");
// }).catch((err) => {
//     console.log(err);
// });

// const userSchema = new mongoose.Schema({
//     name: String,
//     email: String,
//     c_name: String,
//     p_number: Number
// });

// const User = mongoose.model("User", userSchema);
// app.use(express.urlencoded({extended: true}));

app.listen(port, () => {
    console.log("Listening");
});

app.post("/register", (req, res) => {
    // let {name: newName, c_name: newC, email: newEmail, p_number: newP} = req.body;
    // let user1 = User({name: newName, c_name: newC, email: newEmail, p_number: newP});
    // user1.save().then((res) => {
    //     console.log(res);
    // }).catch((err) => {
    //     console.log(err);
    // });
    // res.redirect("http://localhost:5173");
    res.send("Hello");
});
