import React,{useContext} from 'react'
import {StyleSheet,View} from 'react-native'
import {ToDoForm} from '../components/toDoForm/ToDoForm'
import {ToDoList} from '../components/toDoList/ToDoList'
import { ToDoContext } from '../context/todo/todoContext';
import { ScreenContext } from '../context/screen/screenContext';

export const MainScreen = ()=>{
    const {todos,addToDo,removeToDo}=useContext(ToDoContext)
    const {changeScreen} = useContext(ScreenContext)
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