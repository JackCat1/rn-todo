import React from 'react'
import {StyleSheet,View} from 'react-native'
import {ToDoForm} from '../components/toDoForm/ToDoForm'
import {ToDoList} from '../components/toDoList/ToDoList'

export const MainScreen = ({list,addToDo,removeToDo,onOpen})=>{
    return (
        <View style={style.wrap}>
            <ToDoForm addToDo={addToDo}/>        
            <ToDoList list={list} removeToDo={removeToDo} onOpen={onOpen}/>
        </View>
    )
}

const style = StyleSheet.create({
    wrap:{}
})