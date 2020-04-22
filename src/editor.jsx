import React, {useState} from "react"
import "./editor.css"

const Editor = (props) => {
    const {stateNotes, setNotes, children, show, setShow} = props
    console.log("yaay!")
    return (
        <div className="editor-container">
        <div className="editor">
        <textarea cols="30" 
                  rows="10"
                  value={children.name}
                  onChange={(event) => {
                    let nextNotesName = stateNotes.map((element) => {
                        if(element.id == children.id) {
                            let nextElement = {
                                ...element,
                                name: event.target.value
                            }
                        return nextElement
                        } else {
                            return element
                            }
                        })
                    setNotes(nextNotesName)
                    }}
        />
        <textarea 
            className="note-field"
            value={children.content} 
            onChange={(event) => {
                let nextNotes = stateNotes.map((element) => {
                    if(element.id == children.id) {
                        let nextElement = {
                            ...element,
                            content: event.target.value
                        }
                    return nextElement
                    } else {
                        return element
                        }
                    })
                setNotes(nextNotes)
                }
            }
        />
        <button name='delButt' className="del-butt"
                    onClick={() => {
                        stateNotes.splice(children.id, 1)
                        let newStateNotes = stateNotes.map((element) => {
                            let i = 0
                            do {
                                return element;
                                i++;
                            } while (i==stateNotes.length++)
                        })
                        setNotes(newStateNotes)
                        console.log(newStateNotes)    
                    }}
            >X</button>
            <button onClick={() => {setShow(false)}}>Back</button>
        </div>
        </div>
    )
}

export default Editor

