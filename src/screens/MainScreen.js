import React,{useContext,useEffect,useCallback} from 'react'
import {StyleSheet,View} from 'react-native'
import {ToDoForm} from '../components/toDoForm/ToDoForm'
import {ToDoList} from '../components/toDoList/ToDoList'
import { ToDoContext } from '../context/todo/todoContext';
import { ScreenContext } from '../context/screen/screenContext';
import { AppLoader } from '../components/AppLoader';

export const MainScreen = ()=>{
    const {todos,addToDo,removeToDo,fetchToDo,loading,error}=useContext(ToDoContext)
    const {changeScreen} = useContext(ScreenContext)

    const loadToDo = useCallback(async ()=>await fetchToDo(),[fetchToDo])

    useEffect(()=>{
        loadToDo()
    },[])


    if(loading){
        return <AppLoader/>
    }

    return (
        <View style={style.wrap}>
            <ToDoForm addToDo={addToDo}/>        
            <ToDoList list={todos} removeToDo={removeToDo} onOpen={changeScreen}/>
        </View>
    )
}

const style = StyleSheet.create({
    wrap:{}
})