import React, {useState} from "react";

function NoteEditor({viewNote, handleEditor}) {

  const [title, setTitle] = useState(viewNote.title)
  const [body, setBody] = useState(viewNote.body)

  function handleTitleChange(e) {
    setTitle(e.target.value)
  }

  function handleBodyChange(e) {
    setBody(e.target.value)
  }

  

  return (
    <form className="note-editor">
      <input type="text" name="title" value={title} onChange={handleTitleChange}/>
      <textarea name="body" value={body} onChange={handleBodyChange}/>
      <div className="button-row">
        <input className="button" type="submit" value="Save"/>
        <button type="button">Cancel</button>
      </div>
    </form>
  );
}

export default NoteEditor;
