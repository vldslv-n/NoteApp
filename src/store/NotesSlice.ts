import { createSlice } from '@reduxjs/toolkit'
import Types from "types"

const initialState: Types.NoteState = {
    data: []
}

const notesSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {
        init(state, action: Types.Action) {
            state.data = action.payload
        },
        add(state, action: { payload: Types.Note }) {
            state.data.push(action.payload)
        },
        changeById(state, action: Types.Action) {
            state.data = action.payload
        },
        deleteById(state, action: Types.Action) {
            state.data = action.payload
        },
        clear(state) {
            state.data = initialState.data
        }
    }
})

export default notesSlice
