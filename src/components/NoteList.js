import React from "react";
import NoteItem from "./NoteItem";

function NoteList({notes}) {
  console.log(notes)

  const renderNoteCards = notes.map
  return (
    <ul>
      {/* Render list of notes here... */}
      <NoteItem />
    </ul>
  );
}

export default NoteList;
