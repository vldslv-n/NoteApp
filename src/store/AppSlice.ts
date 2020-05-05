import { createSlice } from '@reduxjs/toolkit'
import Types from "types"

const initialState: Types.AppState = {
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
        setError(state, action: { payload: Types.Error }) {
            state.error = action.payload
        }
    }
})

export default appSlice
