import React from "react"
import Actions from 'actions'
import BackIcon from 'components/Editor/icons/Back'
import DeleteIcon from 'components/Editor/icons/Delete'
import PencilIcon from 'components/Editor/icons/Pencil'
import EyeIcon from 'components/Editor/icons/Eye'

const SideBar = (props) => {
    const { setEdit, stateEdit, setShow, children } = props

    return (
        <div>
            <button
                name='delBtn'
                title='Delete Note'
                className="del-btn"
                onClick={() => {
                    Actions.removeNote(children.id)
                    setShow(false)
                }}
                children={(
                    <DeleteIcon />
                )}
            />
            <button
                className='back-btn'
                title='Back to Notes'
                onClick={() => { setShow(false) }}
                children={(
                    <BackIcon />
                )}
            />
            <button
                className='edit-btn'
                onClick={() => { setEdit(!stateEdit) }}
                children={(stateEdit === true ? <PencilIcon /> : <EyeIcon />)}
            />
        </div>
    )
}

export default SideBar

