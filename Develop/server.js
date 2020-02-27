
var express = require("express");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3030;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));

//MIDDLEWARE
app.use(express.json()); 
app.use(express.static("public"));

//REQUIRE ROUTES
require("./routes/HTMLroutes")(app)
require("./routes/APIroutes")(app)

// HTML Routes
// =============================================================
// app.get("/notes", function(req, res) {
//     res.sendFile(path.join(__dirname, "./public/notes.html"));
//   });
  
// app.get("*", function(req, res) {
//     res.sendFile(path.join(__dirname, "./public/index.html"));
//   });

  // Endpoints to displays all notes? 
  // app.get("/api/notes", function(req, res) {
  //   //res.send(notes)??
  //   console.log(res)
  //   // notes = res

  // });
  // app.post("/api/notes", function(req, res){
  //   console.log(req.body)
  // })
  
  // Endpoint to display a single note, or returns false
  // app.get("/api/notes/:id", function(req, res) {
  //   var chosen = req.params.notes;
  
  //   console.log(chosen);
  
  //   return res.json(false);
  // });
  
  // // Create New Notes - takes in JSON input
  // app.post("/api/notes", function(req, res) {
  //   // req.body hosts is equal to the JSON post sent from the user
  //   // This works because of our body parsing middleware

  //   const newNote = req.body;
  //   notes.push(newNote);
  //   fs.writeFile("../../../db/db.json", JSON.stringify(notes)).then(function(res){
  //     console.log(res)
  //   })
  
  //   console.log(newNote);
  
  //   res.json(notes);
  // });
  


  // Starts the server to begin listening
  // =============================================================
  app.listen(PORT, function() {
    console.log(`App listening on ${PORT}`);
  });