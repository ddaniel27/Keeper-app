import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [newNote, setNewNote] = React.useState({
    title: "",
    content: ""
  });
  const [notes, setNotes] = React.useState([]);

  function nextNote(event){
    const {name, value} = event.target;
    setNewNote(previousNote=>{
      return{
        ...previousNote,
        [name]:value
      };
    });
  }
  function addNote(event){
    setNotes(prevNotes =>{
      return [...prevNotes,newNote];
    });
    event.preventDefault();
  }
  function deleteNote(id){
    setNotes(previousNotes=>{
      return(previousNotes.filter((_,idx)=>idx!==id));
    })
  }
  return (
    <div>
      <Header />
      <CreateArea onChange={nextNote} onClick={addNote} />
      {notes.map((note, idx)=><Note 
        title={note.title}
        content={note.content} 
        id={idx} 
        onClick={deleteNote} 
        />)}
      <Footer />
    </div>
  );
}

export default App;
