import React, {useState, useEffect} from "react";
import Search from "./Search";
import Sidebar from "./Sidebar";
import Content from "./Content";

function NoteContainer() {
  const [notes, setNotes] = useState([])

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

  console.log(filterNotes)

  return (
    <>
      <Search onSearch={onSearch}/>
      <div className="container">
        <Sidebar notes={filterNotes} handleClick={handleClick}/>
        <Content viewNote = {viewNote} setViewNote={setViewNote}/>
      </div>
    </>
  );
}

export default NoteContainer;
