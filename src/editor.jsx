import React, {useState} from "react"

const Editor = (props) => {
    const {stateNotes, setNotes, children, show, setShow} = props
    console.log("yaay!")
    return (
        <div>
        <textarea 
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
        </div>
    )
}

export default Editor

