const router = require("express").Router();
let database = require("../db/db.json");
const uuid = require("uuid/v1");

router.get("/notes", function (req, res) {
  res.json(database);
});

router.post("/notes", function (req, res) {
  var newNotes = {
    id: uuid(),
    title: req.body.title,
    text: req.body.text,
  };

  database.push(newNotes);
  res.json(true);
});

router.delete("/notes/:id", function (req, res) {
  console.log(req.params.id);

  var test = database.filter((note) => note.id !== req.params.id);
  console.log(test);
  database = test;
  res.json({
    ok: true,
  });
});

module.exports = router;
