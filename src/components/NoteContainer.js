import React, {useState, useEffect} from "react";
import Search from "./Search";
import Sidebar from "./Sidebar";
import Content from "./Content";

function NoteContainer() {
  const [notes, setNotes] = useState([])

  function addNoteToState(noteObj) {
    console.log(noteObj)
    setNotes([...notes, noteObj])
  }

  useEffect(() => {
    fetch('http://localhost:3000/notes')
    .then(r => r.json())
    .then((allNotes) => setNotes(allNotes))
  }, [])

  const [viewNote, setViewNote] = useState(false)

  function handleClick(note) {
    console.log(note)
    setViewNote(note)
  }

  const [searchWord, setSearchWord] = useState('')

  function onSearch(searchStr) {
    setSearchWord(searchStr)
  }

  const filterNotes = notes.filter((note) => {
    const lowerCasedTitle = note.title.toLowerCase()
    const lowerCaseSearchWord = searchWord.toLowerCase()
    return lowerCasedTitle.includes(lowerCaseSearchWord)
  })

  

  return (
    <>
      <Search onSearch={onSearch}/>
      <div className="container">
        <Sidebar addNoteToState={addNoteToState} notes={filterNotes} handleClick={handleClick}/>
        <Content addNoteToState={addNoteToState}viewNote = {viewNote} setViewNote={setViewNote}/>
      </div>
    </>
  );
}

export default NoteContainer;
