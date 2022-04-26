import { useEffect, useState } from 'react'
import {nanoid} from 'nanoid' // Creates unique ID
import NotesList from './components/NotesList'
import Search from './components/Search'
import Header from './components/Header'

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

const [darkMode, setDarkMode] = useState(false)

const key = 'react-notes-app-data'

const savedNotes = JSON.parse(
  localStorage.getItem(key)
);

useEffect(() => {

  if (savedNotes) {
    setNotes(savedNotes);
  }
}, []);

useEffect(() => {
  localStorage.setItem(
    key,
    JSON.stringify(notes)
  );
}, [notes]);

const addNote = (text) => {
  const date = new Date()
  const newNote = {
    id: nanoid(),
    text: text,
    date: date.toLocaleDateString()
  }

  const newNotes = [...notes, newNote]
  setNotes(newNotes)
}


const deleteNote = id => {
  const newNotes = notes.filter((note) => note.id !== id)
  setNotes(newNotes)
}



  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className='container'>
        <Header handleToggleDarkMode={setDarkMode}/>
        <Search handleSearchNote={setSearchText}/>
        <NotesList 
          notes={notes.filter((note) => note.text.toLowerCase().includes(searchText.toLowerCase()))} 
          handleAddNote={addNote} 
          handleDeleteNote={deleteNote} 
        />
      </div>
    </div>
  ) 
}


export default App