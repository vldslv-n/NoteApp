import React, {useState} from "react"
import "./notes.css"
import "./index.css"
import Editor from "./editor.jsx"

const Notes = (props) => {
    const {stateNotes, setNotes, children} = props
    const [show, setShow] = useState(false)
    
    return (
        <div className="single-note note-size">
            <div    className="show-note" 
                    onClick={() => setShow(!show)}>
                {children.name}
            </div>
            <div className="note-edit">
                {show && <Editor
                            stateNotes={stateNotes}
                            setNotes={setNotes}
                            children={children}
                            show={show}
                            setShow={setShow}
                            />}
            </div>
        </div>
    )
}




export default Notes
