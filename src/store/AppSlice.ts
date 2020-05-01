import { createSlice } from '@reduxjs/toolkit'

type Error = {
    code: number
    message: string
}

interface AppState {
    loading: string
    error: null | Error
}

const initialState: AppState = {
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
        setError(state, action: { payload: Error }) {
            state.error = action.payload
        }
    }
})

export default appSlice
