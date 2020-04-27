import React, { useState } from "react"
import ReactDOM from "react-dom"

import Notes from "./notes.jsx"
import Editor from "./editor.jsx"

import "./reset.css"
import "./index.css"
import "./button.css"

let initialState = JSON.parse(localStorage.getItem('NoteApp')) || {
    data: []
}
// console.log(initialState)

const ShowNotes = () => {
    const [stateNotes, setNotes] = useState(initialState.data);
    localStorage.setItem('NoteApp', JSON.stringify({ ...initialState, data: stateNotes }))
    console.log('currentState: ', stateNotes);

    return (
        <div className="container">
            <header className="head">
                Welcome to simple Note App!
            </header>
            <div className="all-notes">
                <button name="noteBtn" className="add-btn"
                    onClick={() => {
                        function uuidv4() {
                            return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
                                (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
                            );
                        }
                        let newId = uuidv4()
                        let newNote = {
                            id: newId,
                            lastEdit: '',
                            name: '',
                            content: ''
                        }
                        stateNotes.push(newNote)
                        let newStateNotes = stateNotes.map((element) => {
                            let i = 0
                            do {
                                return element;
                                i++;
                            } while (i == stateNotes.length)
                        })
                        setNotes(newStateNotes)
                    }}
                    children={(
                        <div>
                            <svg
                                className="svg"
                                viewBox="0 0 42 42">
                                <polygon points="42,20 22,20 22,0 20,0 20,20 0,20 0,22 20,22 20,42 22,42 22,22 42,22 " />
                            </svg>
                            <span className='show-text'>Add Note</span>
                        </div>
                    )}
                />
                {stateNotes.map((note, index) => {
                    return (
                        <Notes
                            key={index}
                            setNotes={setNotes}
                            stateNotes={stateNotes}>
                            {note}
                        </Notes>)
                })}
            </div>
        </div>
    )
}

ReactDOM.render(<ShowNotes />, document.getElementById("app"))