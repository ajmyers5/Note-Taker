// app loads get request to /api/notes and populate notes array
// enter note text save button gets click
// js reads event and sends data post request to api/notes
// under the route for the post
// add newNote to the populated notesArray
// rewrite the entire json file everytime with the new information
// use fs library to writeFile("./db/db.json", notesArray)
let fs = require("fs")

function getNotes(){
return readFile("./db/db.json", "utf8")
}


module.exports = getNotes