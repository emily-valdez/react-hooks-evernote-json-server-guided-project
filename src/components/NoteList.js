import React from "react";
import NoteItem from "./NoteItem";

function NoteList({notes, handleClick}) {

  const renderNoteItems = notes.map(({id, userId, title, body}) => (
    <NoteItem 
      handleClick={handleClick}
      key={id}
      userId={userId}
      title={title}
      body={body}
    />))
  return (
    <ul>
      {renderNoteItems}
    </ul>
  );
}

export default NoteList;
