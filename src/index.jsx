import React, {useState} from "react"
import ReactDOM from "react-dom"

import Tasks from "./tasks.jsx"
import "./reset.css"
import "./index.css"
import "./button.css"

let initialState = JSON.parse(localStorage.getItem('NoteApp')) || {
    data: []
}
console.log(initialState)

const ShowNotes = () => {
    const [stateNotes, setNotes] = useState(initialState.data);
    localStorage.setItem('NoteApp',JSON.stringify({...initialState,data:stateNotes}))
    console.log('currentState: ', stateNotes);
    
    return (
        <div className="container">
            <header className="head">
            Welcome to fabulous Note App *Username*!
            </header>
        <div className="all-notes">
        <button name="noteButt" className="note-size add-butt"
                onClick={() => {
                    function uuidv4() {
                        return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
                          (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
                        );}
                    let newId = uuidv4()
                    let nameNote = 'New Note' //'note' + stateNotes.length
                    let newNote = {
                        id: newId,
                        name: nameNote,
                        content: ''
                    }
                    stateNotes.push(newNote)
                    let newStateNotes = stateNotes.map((element) => {
                        let i = 0
                        do {
                            return element;
                            i++;
                        } while (i==stateNotes.length)
                    })
                    setNotes(newStateNotes)
                }}
        >Add Note</button>
        {stateNotes.map((note, index) => {
            return (
                <Tasks 
                    key={index} 
                    setNotes={setNotes}
                    stateNotes={stateNotes}>
                    {note}
                </Tasks>)})}
        </div>
        </div>
    )
}




ReactDOM.render(<ShowNotes />, document.getElementById("app"))