import { createSlice } from '@reduxjs/toolkit'

type Action = {
    payload: Note[]
}
type Note = {
    id: string
    content: string
    lastEdit: string
}
interface NoteState {
    data: Note[]
}

const initialState: NoteState = {
    data: []
}

const notesSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {
        init(state, action: Action) {
            state.data = action.payload
        },
        add(state, action: { payload: Note }) {
            state.data.push(action.payload)
        },
        changeById(state, action: Action) {
            state.data = action.payload
        },
        deleteById(state, action: Action) {
            state.data = action.payload
        },
        clear(state) {
            state.data = initialState.data
        }
    }
})

export default notesSlice
