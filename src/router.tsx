import React from "react"
import { useSelector } from 'react-redux'
import Board from "./components/Board"
import Types from "types"

const Router = () => {
    const { loading } = useSelector((state: Types.InitState) => state.app)
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