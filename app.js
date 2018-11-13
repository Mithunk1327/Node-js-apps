console.log("Starting App.js !");

// const os = require('os');
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');
const argv = yargs.argv;

var command = argv._[0];
console.log("Command :", command);
//console.log("yargs:",argv);

if (command === "add") {
  var note = notes.addNote(argv.title, argv.body);
  // console.log("note==",note);
  if (note) {
    console.log("Note Added!!");
    notes.logNote(note);
  } else {
    console.log("Note not Added");
  }
} else if (command === "list") {
  var allNotes = notes.getAll();
  console.log(`Printing ${allNotes.length} notes,`);
  allNotes.forEach((note) => {
    notes.logNote(note);
  });

} else if (command === "read") {
  var note = notes.getNote(argv.title);
  if (note) {
    console.log("Note read!!");
    notes.logNote(note);
  } else {
    console.log("Note not found");
  }
} else if (command === "remove") {
  notes.deleteNote(argv.title);
} else {
  console.log("Not Recog");
}


