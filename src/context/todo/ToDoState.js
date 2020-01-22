import React,{useReducer,useContext} from 'react'
import {Alert} from 'react-native'
import {ToDoContext} from './todoContext'
import {todoReducer} from './todoReducer'
import { ADD_TODO, REMOVE_TODO, UPDATE_TODO, SHOW_LOADER, HIDE_LOADER, SHOW_ERROR, CLEAR_ERROR, FETCH_TODOS } from '../types';
import { ScreenContext } from '../screen/screenContext';

export const ToDoState = ({children})=>{
    const {changeScreen} = useContext(ScreenContext)
    const initialState = {
        todos:[],
        loading:false,
        error:null
    }
    
    const [state,dispath] = useReducer(todoReducer,initialState)

    const fetchToDo = async ()=>{
        showLoader()
        const responce = await fetch('https://rn-todo-app-9feba.firebaseio.com/todos.json',{
            method:'GET',
            headers:{'Content-Type':'application/json'}
        })
        const data = await responce.json()
        const todos = Object.keys(data).map(key=>({...data[key],id:key}))
        dispath({type:FETCH_TODOS,todos})
        hideLoader()
    }
    const addToDo = async title =>{
        const responce = await fetch('https://rn-todo-app-9feba.firebaseio.com/todos.json',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({title})
        })
        const data = await responce.json()
        dispath({type:ADD_TODO,title,id:data.name})
    }
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
                onPress:async () => {
                    changeScreen(null)
                    await fetch(`https://rn-todo-app-9feba.firebaseio.com/todos/${id}.json`,{
                        method:'DELETE',
                        headers:{'Content-Type':'application/json'}                        
                    })
                    dispath({type:REMOVE_TODO,id})
                }
            },
            ],
            {cancelable: false},
        );
        
    }
    const updateToDo = async (id,title) => {
        await fetch(`https://rn-todo-app-9feba.firebaseio.com/todos/${id}.json`,{
            method:'PATCH',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({title})
        })
        dispath({type:UPDATE_TODO,id,title})
    }


    const showLoader = ()=>dispath({type:SHOW_LOADER})
    const hideLoader = ()=>dispath({type:HIDE_LOADER})
    const showError = error=>dispath({type:SHOW_ERROR,error})
    const clearError = ()=>dispath({type:CLEAR_ERROR})

    return <ToDoContext.Provider 
        value={{
            todos:state.todos,
            addToDo,
            removeToDo,
            updateToDo,
            loading:state.loading,
            error:state.error,
            fetchToDo
        }}
        >{children}</ToDoContext.Provider>
}