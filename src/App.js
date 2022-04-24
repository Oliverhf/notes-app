import { useState } from 'react'
import {nanoid} from 'nanoid'
import NotesList from './components/NotesList'
import Search from './components/Search'

const App = () => {

  const [notes, setNotes] = useState([
    {
    id: nanoid(),
    text: "This is my first note",
    date: "12/04/2022"
    },
    {
      id: nanoid(),
      text: "This is my second note",
      date: "20/04/2022"
    },
    {
      id: nanoid(),
      text: "This is my third note",
      date: "24/04/2022"
    },
    {
      id: nanoid(),
      text: "This is my fourth note",
      date: "30/04/2022"
    }
])

const [searchText, setSearchText] = useState('')

const addNote = (text) => {
  const date = new Date()
  const newNote = {
    id: nanoid(),
    text: text,
    data: date
  }

  const newNotes = [...notes, newNote]
  setNotes(newNotes)
}


const deleteNote = id => {
  const newNotes = notes.filter((note) => note.id !== id)
  setNotes(newNotes)
}

  return (
    <div className='container'>
      <Search handleSearchNote={setSearchText}/>
      <NotesList 
        notes={notes.filter((note) => note.text.toLowerCase().includes(searchText))} 
        handleAddNote={addNote} 
        handleDeleteNote={deleteNote} 
      />
    </div>
  ) 
}


export default App