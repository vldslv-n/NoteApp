import store, { App, Notes } from "store"
import { uuid } from 'uuidv4';
import getDate from 'utils/getDate'

export default {
    init: () => {
        try {
            App.pending()
            const savedRawData = localStorage.getItem('NoteApp')
            const savedData = JSON.parse(savedRawData)
            console.log(savedData);
            if (!Array.isArray(savedData)) {
                throw {}
            }
            Notes.init(savedData)
        } catch (error) {
            console.warn('Данные в локал сторейдж — не корректны')
        } finally {
            App.resolve()
        }
    },
    addNote: () => {
        const newNote = {
            id: uuid(),
            lastEdit: '',
            content: ''
        }
        Notes.add(newNote)
    },
    setNote: (id, content) => {
        let nextNotes = store.getState().notes.data.map((element) => {
            if (element.id == id) {
                let nextElement = {
                    ...element,
                    content: content,
                    lastEdit: getDate()
                }
                return nextElement
            } else {
                return element
            }
        })
        Notes.changeById(nextNotes)
    },
    removeNote: (id) => {
        const data = store.getState().notes.data
        const newStateNotes = data.filter((element) => element.id != id)
        Notes.deleteById(newStateNotes)
    }
}