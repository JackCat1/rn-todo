import React,{useState} from 'react';
import { StyleSheet, Text, View,ScrollView } from 'react-native';

import {Navbar} from './src/components/navbar/Navbar'
import { ToDoForm } from './src/components/toDoForm/ToDoForm';
import { ToDoList } from './src/components/toDoList/ToDoList';

export default function App() {
  const [list,setState] = useState([
    {
      id:'1',
      title:'First'
    },
    {
      id:'2',
      title:'Seconnd'
    }
  ])
  const addToDo = title=>{
    setState(prev=>[...prev,{
      id:Date.now().toString(),
      title
    }])
  }
  const removeToDo = id=>{
    setState(prev => prev.filter(item=>item.id!==id))
  }
  return (
    <View>
      <Navbar/>
      <View style={style.content}>
        <ToDoForm addToDo={addToDo}/>        
          <ToDoList list={list} removeToDo={removeToDo}/>               
      </View>      
    </View>
  );
}

const style = StyleSheet.create({
  content:{
    paddingHorizontal:10,
    paddingVertical:10
  }
})