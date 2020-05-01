import React, { useState } from "react"
import Editor from "../Editor"
import createMarkdown from 'utils/convertMarkdown'
import "./styles"
type Note = {
    id: string
    content: string
    lastEdit: string
}
interface NotesProps {
    children: Note
}

const Notes = (props: NotesProps) => {
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
