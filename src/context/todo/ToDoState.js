import React,{useReducer,useContext} from 'react'
import {ToDoContext} from './todoContext'
import {todoReducer} from './todoReducer'
import { ADD_TODO, REMOVE_TODO, UPDATE_TODO } from '../types';
import { ScreenContext } from '../screen/screenContext';

export const ToDoState = ({children})=>{
    const {changeScreen} = useContext(ScreenContext)
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

    const addToDo = title =>dispath({type:ADD_TODO,title})
    const removeToDo = id =>{
        changeScreen(null)
        dispath({type:REMOVE_TODO,id})
    }
    const updateToDo = (id,title) => dispath({type:UPDATE_TODO,id,title})

    return <ToDoContext.Provider 
        value={{
            todos:state.todos,
            addToDo,
            removeToDo,
            updateToDo
        }}
        >{children}</ToDoContext.Provider>
}