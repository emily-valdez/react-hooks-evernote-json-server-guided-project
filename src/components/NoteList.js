import React from "react";
import NoteItem from "./NoteItem";

function NoteList({notes}) {
  console.log(notes)

  const renderNoteItems = notes.map((note) => (
    <NoteItem 
      key={note.id}
      userId={note.userId}
      title={note.title}
      body={note.body}
    />))
  return (
    <ul>
      {renderNoteItems}
      <NoteItem />
    </ul>
  );
}

export default NoteList;
