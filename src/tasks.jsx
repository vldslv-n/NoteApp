import React, {useState} from "react"

const Notes = (props) => {
    const {stateNotes, setNotes, children} = props
    const [show, setShow] = useState(false)

    
    

    return (
        <div>
            <div onClick={() => setShow(!show)}>
                {children.name}</div>
            <div>
                {show && 
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
                }
            </div>
            <button name='delButt'
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




export default Notes

// onChange={(event) => {