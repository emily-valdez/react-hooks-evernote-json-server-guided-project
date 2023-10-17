import React from "react";
import NoteItem from "./NoteItem";

function NoteList({notes}) {
  console.log(notes)

  const renderNoteItems = notes.map(({id, userId, title, body}) => (
    <NoteItem 
      key={id}
      userId={userId}
      title={title}
      body={body}
    />))
  return (
    <ul>
      {renderNoteItems}
      <NoteItem />
    </ul>
  );
}

export default NoteList;
