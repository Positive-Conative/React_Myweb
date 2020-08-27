const express = require("express");
var Guesetbook = require("../models/Guesetbook");
const router = express.Router();

//router.get('/', (req, res)=>res.json({username:'CTS4u'}));
router.get("/group", (req, res) => res.json({ username: "dev group. cts" }));

router.get("/create", (req, res) => {
  var a = "a";
  var b = "b";
  var c = "c";
  let board = new Guesetbook({
    title: a,
    content: b,
    name: c,
  });
  console.log(board);
  board.save((err) => {
    if (err) throw err;
    return res.json({ success: true });
  });
});

router.get("/read", (req, res) => {
  Guesetbook.find(function (err, data) {
    if (err) return res.status(500).send({ error: "database failure" });
    res.send(data);
  });
});

module.exports = router;
