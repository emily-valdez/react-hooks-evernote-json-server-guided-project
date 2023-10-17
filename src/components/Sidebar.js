import React from "react";
import NoteList from "./NoteList";

function Sidebar({addNoteToState, notes, handleClick}) {

  function handleNewNote() {
    const newNote = {title:'New Title', body:'Type here'}
    fetch('http://127.0.0.1:3000/notes', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newNote)
    })
    .then(r => r.json())
    .then((freshNote) => {addNoteToState(freshNote)})
  }
  return (
    <div className="master-detail-element sidebar">
      <NoteList notes={notes} handleClick={handleClick}/>
      <button onClick={handleNewNote}>New</button>
    </div>
  );
}

export default Sidebar;
