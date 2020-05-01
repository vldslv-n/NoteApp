import { createSlice } from '@reduxjs/toolkit'

let initialState = {
    data: []
}

const notesSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {
        init(state, action) {
            console.log("init: ", action.payload);
            state.data = action.payload
        },
        add(state, action) {
            state.data.push(action.payload)
        },
        changeById(state, action) {
            state.data = action.payload
        },
        deleteById(state, action) {
            state.data = action.payload
        },
        clear(state) {
            state.data = initialState.data
        }
    }
})

export default notesSlice
