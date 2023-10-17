import React, {useState} from "react";

function NoteEditor() {

  const [title, setTitle] = useState('')

  function handleTitleChange(event) {
    setTitle(event.target.value)
  }

  return (
    <form className="note-editor">
      <input 
        type="text"   
        name="title" 
        value={title} 
        onChange={handleTitleChange} 
      />
      <textarea name="body" />
      <div className="button-row">
        <input className="button" type="submit" value="Save" />
        <button type="button">Cancel</button>
      </div>
    </form>
  );
}

export default NoteEditor;
