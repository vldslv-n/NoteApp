import React from "react"
import { useSelector } from 'react-redux'
import Board from "./components/Board"

interface AppState {
    loading: string
    error: null | Error
}
interface InitState {
    DefaultRootState: object
    app: AppState
}

const Router = () => {
    const { loading } = useSelector((state: InitState) => state.app)
    if (loading === 'pending') {
        return (
            <div>Приложение загружается</div>
        )
    }
    if (loading === 'resolve') {
        return (
            <Board />
        )
    }
}

export default Router