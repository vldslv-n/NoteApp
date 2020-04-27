import React, { useState } from "react"
import marked from "marked"
import "./editor.css"
import "./reset.css"
import "./button.css"

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
    const [stateEdit, setEdit] = useState(true)
    const createMarkdown = () => {
        return { __html: marked(children.content) };
    }
    let lastEdit = "Last Edit: " + new Date().today() + " @ " + new Date().timeNow()

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
                    : <div className="markdown-view"
                        dangerouslySetInnerHTML={createMarkdown()} />
                }
                <button
                    name='delBtn'
                    title='Delete Note'
                    className="del-btn"
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
                        setShow(false)
                        // console.log(newStateNotes)
                    }}
                    children={(
                        <svg
                            className="svg"
                            viewBox="0 0 486.4 486.4">
                            <g>
                                <g>
                                    <path d="M446,70H344.8V53.5c0-29.5-24-53.5-53.5-53.5h-96.2c-29.5,0-53.5,24-53.5,53.5V70H40.4c-7.5,0-13.5,6-13.5,13.5
                                    S32.9,97,40.4,97h24.4v317.2c0,39.8,32.4,72.2,72.2,72.2h212.4c39.8,0,72.2-32.4,72.2-72.2V97H446c7.5,0,13.5-6,13.5-13.5
                                    S453.5,70,446,70z M168.6,53.5c0-14.6,11.9-26.5,26.5-26.5h96.2c14.6,0,26.5,11.9,26.5,26.5V70H168.6V53.5z M394.6,414.2
                                    c0,24.9-20.3,45.2-45.2,45.2H137c-24.9,0-45.2-20.3-45.2-45.2V97h302.9v317.2H394.6z"/>
                                    <path d="M243.2,411c7.5,0,13.5-6,13.5-13.5V158.9c0-7.5-6-13.5-13.5-13.5s-13.5,6-13.5,13.5v238.5 C229.7,404.9,235.7,411,243.2,411z" />
                                    <path d="M155.1,396.1c7.5,0,13.5-6,13.5-13.5V173.7c0-7.5-6-13.5-13.5-13.5s-13.5,6-13.5,13.5v208.9 C141.6,390.1,147.7,396.1,155.1,396.1z" />
                                    <path d="M331.3,396.1c7.5,0,13.5-6,13.5-13.5V173.7c0-7.5-6-13.5-13.5-13.5s-13.5,6-13.5,13.5v208.9 C317.8,390.1,323.8,396.1,331.3,396.1z" />
                                </g>
                            </g>
                        </svg>
                    )}
                />
                <button
                    className='back-btn'
                    title='Back to Notes'
                    onClick={() => { setShow(false) }}
                    children={(
                        <svg className='svg'
                            viewBox="0 0 612 612" >
                            <g>
                                <g id="_x37__32_">
                                    <g>
                                        <path d="M497.25,497.25c0,21.114-17.117,38.25-38.25,38.25H76.5c-21.133,0-38.25-17.136-38.25-38.25v-382.5
                                            c0-21.133,17.117-38.25,38.25-38.25H459c21.133,0,38.25,17.117,38.25,38.25v57.375h38.25V114.75c0-42.247-34.253-76.5-76.5-76.5
                                            H76.5C34.253,38.25,0,72.503,0,114.75v382.5c0,42.247,34.253,76.5,76.5,76.5H459c42.247,0,76.5-34.253,76.5-76.5v-57.375h-38.25
                                            V497.25z M592.875,286.875H180.043l100.272-100.272c7.478-7.458,7.478-19.584,0-27.042c-7.478-7.478-19.584-7.478-27.042,0
                                            L121.329,291.522c-3.997,3.978-5.699,9.256-5.432,14.478c-0.268,5.221,1.435,10.5,5.413,14.478l131.943,131.943
                                            c7.458,7.478,19.584,7.478,27.042,0c7.478-7.459,7.478-19.584,0-27.043L180.043,325.125h412.832
                                            c10.557,0,19.125-8.568,19.125-19.125C612,295.443,603.432,286.875,592.875,286.875z"/>
                                    </g>
                                </g>
                            </g>
                        </svg>
                    )}
                />
                <button
                    className='edit-btn'
                    onClick={() => { setEdit(!stateEdit) }}
                    children={(stateEdit === true ?
                        <svg className="svg"
                            viewBox="0 0 469.336 469.336" >
                            <g>
                                <g>
                                    <path d="M456.836,76.168l-64-64.054c-16.125-16.139-44.177-16.17-60.365,0.031L45.763,301.682
                                        c-1.271,1.282-2.188,2.857-2.688,4.587L0.409,455.73c-1.063,3.722-0.021,7.736,2.719,10.478c2.031,2.033,4.75,3.128,7.542,3.128
                                        c0.979,0,1.969-0.136,2.927-0.407l149.333-42.703c1.729-0.5,3.302-1.418,4.583-2.69l289.323-286.983
                                        c8.063-8.069,12.5-18.787,12.5-30.192S464.899,84.237,456.836,76.168z M285.989,89.737l39.264,39.264L120.257,333.998
                                        l-14.712-29.434c-1.813-3.615-5.5-5.896-9.542-5.896H78.921L285.989,89.737z M26.201,443.137L40.095,394.5l34.742,34.742
                                        L26.201,443.137z M149.336,407.96l-51.035,14.579l-51.503-51.503l14.579-51.035h28.031l18.385,36.771
                                        c1.031,2.063,2.708,3.74,4.771,4.771l36.771,18.385V407.96z M170.67,390.417v-17.082c0-4.042-2.281-7.729-5.896-9.542
                                        l-29.434-14.712l204.996-204.996l39.264,39.264L170.67,390.417z M441.784,121.72l-47.033,46.613l-93.747-93.747l46.582-47.001
                                        c8.063-8.063,22.104-8.063,30.167,0l64,64c4.031,4.031,6.25,9.385,6.25,15.083S445.784,117.72,441.784,121.72z"/>
                                </g>
                            </g>
                        </svg>
                        : <svg className='svg'
                            viewBox="0 0 469.333 469.333">
                            <g>
                                <g>
                                    <g>
                                        <path d="M234.667,170.667c-35.307,0-64,28.693-64,64s28.693,64,64,64s64-28.693,64-64S269.973,170.667,234.667,170.667z" />
                                        <path d="M234.667,74.667C128,74.667,36.907,141.013,0,234.667c36.907,93.653,128,160,234.667,160
                                            c106.773,0,197.76-66.347,234.667-160C432.427,141.013,341.44,74.667,234.667,74.667z M234.667,341.333
                                            c-58.88,0-106.667-47.787-106.667-106.667S175.787,128,234.667,128s106.667,47.787,106.667,106.667
                                            S293.547,341.333,234.667,341.333z"/>
                                    </g>
                                </g>
                            </g>
                        </svg>
                    )}
                />
                <div className="last-edit">{children.lastEdit}</div>
            </div>
        </div >
    )
}

export default Editor