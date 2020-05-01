import React, { useState } from "react"
import Actions from '../../actions'
import SideBar from 'components/SideBar'
import createMarkdown from 'utils/convertMarkdown'
import "./styles"

const Editor = (props) => {
    const { children, setShow } = props
    const [stateEdit, setEdit] = useState(true)
    return (
        <div className="editor-container">
            <div className="opacitier" />
            <div className="editor">
                {stateEdit === false ?
                    <textarea
                        className="note-field"
                        placeholder="Type some text"
                        rows='10'
                        cols='20'
                        wrap="hard"
                        value={children.content}
                        onChange={(event) => {
                            Actions.setNote(children.id, event.target.value)
                        }} />
                    : <div className="markdown-view"
                        dangerouslySetInnerHTML={createMarkdown(children.content)} />
                }
                <SideBar
                    stateEdit={stateEdit}
                    setEdit={setEdit}
                    setShow={setShow}
                    children={children}
                />
                <div className="last-edit">{children.lastEdit}</div>
            </div>
        </div >
    )
}

export default Editor