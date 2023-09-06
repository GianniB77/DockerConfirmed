const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose')
const bodyparser = require('body-parser')
const pieces = require('./models/pieces.js')
app.use(cors());
app.use(bodyparser.json());
app.use(express.json())

mongoose.connect(`mongodb://${process.env.MONGO}:27017/dockerconfirmed`)
  .then(() => {
  console.log('Connecté à MongoDB');
  })
  .catch((error) => {
  console.error(error);
  })

app.get("/piece", (req, res) => {
    pieces.find().then( (piece) => {
        res.send(piece);
    }) 
})

app.post("/piece", (req, res) => {
    let newPiece = new pieces({
        nom: req.body.nom
    })
    newPiece.save();
    res.status(201).send("Great success");
})

app.listen(5000, () => {console.log("Server started on port 5000")})

