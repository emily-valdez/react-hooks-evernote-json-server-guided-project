import React, {useState, useEffect} from "react";
import Search from "./Search";
import Sidebar from "./Sidebar";
import Content from "./Content";

function NoteContainer() {

  const [notes, setNotes] = useState([])
  const [viewNote, setViewNote] = useState(false)
  const [searchTitle, setSearchTitle] = useState("")
  const [edit, setEdit] = useState(false)


  function addNoteToState(noteObj) {
    setNotes([...notes, noteObj])
  }

  useEffect(() => {
    fetch("http://localhost:3000/notes")
    .then(r => r.json())
    .then(notes => setNotes(notes))
  },[])

  const handleClick = (note) => {
    setViewNote(note)
  }

  function onSearch(searchString){
    setSearchTitle(searchString)
  }
  
  const filterNotes = notes.filter((note) => {
    const lowerCaseTitle = note.title.toLowerCase()
    const lowerCaseSearchTitle = searchTitle.toLowerCase()
    return lowerCaseTitle.includes(lowerCaseSearchTitle)
  })

 
  function patchNote(noteFromServer) {
    setNotes((currentNotes) => currentNotes.map((note) => {
    if (note.id===noteFromServer.id) {
      return noteFromServer
    } else {
      return note
    }
    })
   )
  }


  function handleEdit() {
    setEdit(!edit)
  }
  
  return (
    <>
      <Search onSearch={onSearch} />
      <div className="container">
          <Sidebar handleClick={handleClick} notes={filterNotes} addNoteToState={addNoteToState} patchNote={patchNote} />
          <Content viewNote={viewNote} handleClick={handleClick} patchNote={patchNote} handleEdit={handleEdit} edit={edit}/>
      </div>
    </>
  );
}

export default NoteContainer;


 