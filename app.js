const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const path = require("path")
const app = express();

main().catch((err) => {
    console.log(err);
})
async function main() {
    await mongoose.connect("mongodb://localhost:27017/tution");
}

var tutionSchema = new mongoose.Schema({
    name: String,
    myCourse: String,
    email: String,
    number: Number
})

var tutionModel = mongoose.model("tutionz", tutionSchema);

app.use("/static", express.static('static'));
app.use(express.urlencoded());

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.status(200).render('index');
})

app.post("/", (req, res) => {
    let mydata = new tutionModel(req.body);
    mydata.save().catch(() => {
        res.status(404).send("app is not working");
    })
    res.status(200).render('index');
})

app.listen(80, () => {
    console.log("our app is rolling");
})