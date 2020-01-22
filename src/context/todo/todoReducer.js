import { ADD_TODO, UPDATE_TODO, REMOVE_TODO, FETCH_TODOS, SHOW_LOADER, HIDE_LOADER, SHOW_ERROR, CLEAR_ERROR } from "../types";

export const todoReducer = (state,action)=>{
    switch(action.type){
        case ADD_TODO:
            return {
                ...state,
                todos:[
                    ...state.todos,
                    {
                        id:action.id,
                        title: action.title
                    }
                ]
            }
        case UPDATE_TODO:
            return {
                ...state,
                todos:state.todos.map(item=>{
                        if(item.id===action.id){
                          item.title=action.title
                        }
                        return item
                    }
                )
            }
        case REMOVE_TODO:
            return {
                ...state,
                todos:state.todos.filter(item=>item.id!==action.id)
            }
        case FETCH_TODOS:
            return {...state,todos:action.todos}
        case SHOW_LOADER:
            return {...state,loading:true}
        case HIDE_LOADER:
            return {...state,loading:false}
        case SHOW_ERROR:
            return {...state,error:action.error}
        case CLEAR_ERROR:
            return {...state,error:null}
        default:
            return state
    }    
}