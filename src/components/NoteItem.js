import React from "react";

function NoteItem({title, body, id, handleClick}) {

  const note = {title, body, id}

  return (
    <li onClick={()=>{handleClick(note)}}>
      <h2>{title}</h2>
      <p className ="truncate">{body}</p>
    </li>
  );
}

export default NoteItem;

