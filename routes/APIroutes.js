const path = require("path");
const fs = require("fs");
const getNotes = require("../will");

module.exports = function (app) {
  app.post("/api/notes", async function (req, res) {
    fs.readFile("./db/db.json", "utf8", (err, resp) => {
      if (err) throw err;
      res.json(JSON.parse(resp));

      console.log("hello");

      var notes = [];
      const newNote = req.body;
      console.log("outsideWriteFile");
      fs.writeFile("./db/db.json", JSON.stringify(notes), function (err) {
        if (err) {
          console.log(err);
        } else {
          console.log("OK");
        }
      });

      console.log(newNote);

      res.json(notes);
    });
  });

  app.get("/api/notes", async function (req, res) {
    fs.readFile("./db/db.json", "utf8", (err, resp) => {
      if (err) throw err;
      res.json(JSON.parse(resp));
    });
  });

  //   //DELETE
  // app.delete("/api/notes/:id", function(req, res){

  //     var noteId = req.params.id
  // })
};
