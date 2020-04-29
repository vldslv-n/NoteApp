import { configureStore } from '@reduxjs/toolkit'
import { bindActionCreators } from 'redux'
import appSlice from './AppSlice.js'
import notesSlice from './NotesSlice.js'

const store = configureStore({
    reducer: {
        app: appSlice.reducer,
        notes: notesSlice.reducer
    }
})

export const App = bindActionCreators(appSlice.actions, store.dispatch)
export const Notes = bindActionCreators(notesSlice.actions, store.dispatch)
export default store