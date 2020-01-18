import React,{useReducer} from 'react'
import {ToDoContext} from './todoContext'
import {todoReducer} from './todoReducer'

export const ToDoState = ({children})=>{
    const initialState = {
        todos:[
            {
                id:'1',
                title:'First'
            },
            {
                id:'2',
                title:'Seconnd'
            }
        ]
    }
    const [state,dispath] = useReducer(todoReducer,initialState)
    return <ToDoContext.Provider value={{list:state.todos}}>{children}</ToDoContext.Provider>
}