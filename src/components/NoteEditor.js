import React, {useState} from "react";

function NoteEditor({viewNote, patchNote, handleCancel}) {

  const [title, setTitle] = useState(viewNote.title)
  const [body, setBody] = useState(viewNote.body)

  function handleTitleChange(e) {
    setTitle(e.target.value)
  }

  function handleBodyChange(e) {
    setBody(e.target.value)
  }

  console.log(viewNote)

  function handleSubmit(e){
    e.preventDefault()
    fetch(`http://localhost:3000/notes/${viewNote.id}`, {
    method: "PATCH",
    headers: {
    'Content-Type': "application/json",
    'Accept': 'application/json'
    },
    body: JSON.stringify({
      title: title,
      body: body
    }),
    })
    .then((r) => r.json())
    .then((noteFromServer) => patchNote(noteFromServer))
  }
  
 

  return (
    <form className="note-editor" onSubmit={handleSubmit}>
      <input type="text" name="title" value={title} onChange={handleTitleChange}/>
      <textarea name="body" value={body} onChange={handleBodyChange}/>
      <div className="button-row">
        <input className="button" type="submit" value="Save"/>
        <button type="button"onClick={handleCancel}>Cancel</button>
      </div>
    </form>
  );
}

export default NoteEditor;

// const editedNote = {
//   title:"newTitle", body: "newBody"
// }
// function updateNote() {
//   fetch('http://localhost:3000/notes/:id', {
//   method: "PATCH",
//   headers: {
//   'Content-Type': "application/json",
//   },
//   body: JSON.stringify(editedNote),
//   })
//   .then((r) => r.json())
//   .then((noteFromServer) => setEditNote(noteFromServer))
//   }
