import React, { useState } from "react"
import Editor from "../Editor/index.jsx"
import createMarkdown from 'utils/convertMarkdown'
import "./styles"


const Notes = (props) => {
    const { children } = props
    const [show, setShow] = useState(false)

    return (
        <div className="single-note">
            <div className="scaled-markdown"
                dangerouslySetInnerHTML={createMarkdown(children.content)}
                onClick={() => setShow(!show)}
            />
            <div>
                {show &&
                    <Editor
                        children={children}
                        setShow={setShow}
                    />
                }
            </div>
        </div>
    )
}

export default Notes
