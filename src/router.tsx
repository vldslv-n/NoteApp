import React from "react"
import { useSelector } from 'react-redux'
import Board from "./components/Board"

const Router = () => {
    const { loading } = useSelector((state) => state.app)
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