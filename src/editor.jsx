import React, { useState } from "react"
import marked from "marked"
import "./editor.css"

marked.setOptions({
    "baseUrl": null,
    "breaks": false,
    "gfm": true,
    "headerIds": true,
    "headerPrefix": "",
    "highlight": null,
    "langPrefix": "language-",
    "mangle": true,
    "pedantic": false,
    "sanitize": false,
    "sanitizer": null,
    "silent": false,
    "smartLists": false,
    "smartypants": false,
    "tokenizer": null,
    "xhtml": false
})

Date.prototype.today = function () {
    return ((this.getDate() < 10) ? "0" : "") + this.getDate() + "/" + (((this.getMonth() + 1) < 10) ? "0" : "") + (this.getMonth() + 1) + "/" + this.getFullYear();
}
Date.prototype.timeNow = function () {
    return ((this.getHours() < 10) ? "0" : "") + this.getHours() + ":" + ((this.getMinutes() < 10) ? "0" : "") + this.getMinutes() + ":" + ((this.getSeconds() < 10) ? "0" : "") + this.getSeconds();
}

const Editor = (props) => {
    const { stateNotes, setNotes, children, show, setShow } = props
    let lastEdit = "Last Edit: " + new Date().today() + " @ " + new Date().timeNow()
    console.log(lastEdit)
    const createMarkup = () => {
        return { __html: marked(children.content) };
    }

    return (
        <div className="editor-container">
            <div className="opacitier" />
            <div className="editor">
                {/* <textarea
                    className="note-name"
                    placeholder="Name your Note"
                    value={children.name}
                    onChange={(event) => {
                        let nextNotesName = stateNotes.map((element) => {
                            if (element.id == children.id) {
                                let nextElement = {
                                    ...element,
                                    name: event.target.value,
                                    lastEdit: lastEdit
                                }
                                return nextElement
                            } else {
                                return element
                            }
                        })
                        setNotes(nextNotesName)
                    }}
                /> */}
                <textarea
                    id='entire-note'
                    className="note-field"
                    placeholder="Type some text"
                    value={children.content}
                    onChange={(event) => {
                        let nextNotes = stateNotes.map((element) => {
                            if (element.id == children.id) {
                                let nextElement = {
                                    ...element,
                                    content: event.target.value,
                                    lastEdit: lastEdit
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
                <div dangerouslySetInnerHTML={createMarkup()} />
                <button name='delButt' className="del-butt"
                    onClick={() => {
                        stateNotes.splice(children.id, 1)
                        let newStateNotes = stateNotes.map((element) => {
                            let i = 0
                            do {
                                return element;
                                i++;
                            } while (i == stateNotes.length++)
                        })
                        setNotes(newStateNotes)
                        console.log(newStateNotes)
                    }}
                >X</button>
                <button
                    onClick={() => { setShow(false) }}
                    className='back-butt'
                >Back</button>
                <div className="last-edit">{children.lastEdit}</div>
            </div>
        </div >
    )
}

export default Editor

