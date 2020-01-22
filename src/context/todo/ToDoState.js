import React,{useReducer,useContext} from 'react'
import {Alert} from 'react-native'
import {ToDoContext} from './todoContext'
import {todoReducer} from './todoReducer'
import { ADD_TODO, REMOVE_TODO, UPDATE_TODO } from '../types';
import { ScreenContext } from '../screen/screenContext';

export const ToDoState = ({children})=>{
    const {changeScreen} = useContext(ScreenContext)
    const initialState = {
        todos:[],
        loading:false,
        error:null
    }
    
    const [state,dispath] = useReducer(todoReducer,initialState)

    const addToDo = title =>dispath({type:ADD_TODO,title})
    const removeToDo = id =>{
        const elem = state.todos.find(t=>t.id===id)
        Alert.alert(
            'Удаление элемента',
            `Вы уверены, что хотите удалить "${elem.title}"?`,
            [
            {
                text: 'Отмена',          
                style: 'cancel',
            },
            {text: 'Удалить', 
                style: 'destructive',
                onPress: () => {
                    changeScreen(null)
                    dispath({type:REMOVE_TODO,id})
                }
            },
            ],
            {cancelable: false},
        );
        
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