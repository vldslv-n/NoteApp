declare namespace Types {
    type Action = {
        payload: Note[]
    }
    type Error = {
        code: number
        message: string
    }
    type Note = {
        id: string
        content: string
        lastEdit: string
    }
    interface AppState {
        loading: string
        error: null | Error
    }
    interface NoteState {
        data: Note[]
    }
    interface InitState {
        app: AppState
    }
    interface BoardState {
        notes: NoteState
    }
    interface EditorProps {
        children: Note
        setShow: React.Dispatch<React.SetStateAction<boolean>>
    }
    interface NotesProps {
        children: Note
    }
    interface BarProps {
        children: Note
        setEdit: React.Dispatch<React.SetStateAction<boolean>>
        stateEdit: boolean
        setShow: React.Dispatch<React.SetStateAction<boolean>>
    }
}

export default Types