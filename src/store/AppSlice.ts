import { createSlice } from '@reduxjs/toolkit'

let initialState = {
    loading: "idle",
    error: null
}

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        pending(state) {
            state.loading = 'pending'
        },
        reject(state) {
            state.loading = 'reject'
        },
        resolve(state) {
            state.loading = 'resolve'
        },
        setError(state, action) {
            state.error = action.payload
        }
    }
})

export default appSlice
