console.log("Starting notes.js !");

const fs = require("fs");

// function save the note information
var saveNote = (notes) => {
  fs.writeFileSync("notes-data.json", JSON.stringify(notes));
};


var fetchNotes = () => {
  var some = fs.readFileSync("notes-data.json");
  return JSON.parse(some);

}

// add note to notes-data.json file
var addNote = (title, body) => {
  console.log("Adding ", title, body);
  var notes = fetchNotes();

  var note = {
    title,
    body
  }
  var dup = notes.filter((note) => note.title === title);
  if (dup.length === 0) {
    notes.push(note);
    saveNote(notes);
    return note;
  }
};

// fetches all the notes from notes-data.json
var getAll = () => {
  return fetchNotes();
};

// fetches single note with matching title in notes-data.json file
var getNote = (title) => {
  var allNotes = fetchNotes();
  var newArr = allNotes.filter((note) => note.title === title);
  return newArr[0];
};

// deletes single note with matching title in notes-data.json file
var deleteNote = (title) => {
  var allNotes = fetchNotes();
  var newArr = allNotes.filter((note) => note.title !== title);
  console.log("Node removed ");
  saveNote(newArr);

};

var logNote = (note) => {
  console.log("Title--", note.title);
  console.log("--");
  console.log("Body--", note.body);
};

// exports the data and function details to main file or app js
module.exports = {
  // or addNote:addNote
  addNote,
  getAll,
  getNote,
  deleteNote,
  logNote
};

