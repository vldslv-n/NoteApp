import React from "react"
import { useSelector } from 'react-redux'
import Notes from "../Note/index.jsx"
import Actions from '../../actions'
import "./styles"


const Board = () => {
    const { data } = useSelector((state) => state.notes)
    // console.log("render: ", data);
    localStorage.setItem('NoteApp', JSON.stringify(data))
    // console.log(localStorage);

    return (
        <div className="container">
            <header className="head">
                Welcome to simple Note App!
            </header>
            <div className="all-notes">
                <button name="noteBtn" className="add-btn"
                    onClick={() => Actions.addNote()}
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
                {data.map((note, index) => {
                    return (
                        <Notes key={index}>
                            {note}
                        </Notes>)
                })}
            </div>
        </div>
    )
}

export default Board