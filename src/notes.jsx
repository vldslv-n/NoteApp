import React, { useState } from "react"
import marked from "marked"
import "./notes.css"
import "./index.css"
import Editor from "./editor.jsx"

const Notes = (props) => {
    const { stateNotes, setNotes, children } = props
    const [show, setShow] = useState(false)
    const createMarkdown = () => {
        return { __html: marked(children.content) }
    }

    return (
        <div className="single-note">
            <div className="scaled-markdown"
                dangerouslySetInnerHTML={createMarkdown()}
                onClick={() => setShow(!show)}
            />
            <div>
                {show &&
                    <Editor
                        stateNotes={stateNotes}
                        setNotes={setNotes}
                        children={children}
                        show={show}
                        setShow={setShow}
                    />
                }
            </div>
        </div>
    )
}

export default Notes
