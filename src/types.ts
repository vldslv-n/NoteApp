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
}

export default Types