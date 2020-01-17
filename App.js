import React,{useState} from 'react';
import { StyleSheet, Text, View,ScrollView } from 'react-native';

import {Navbar} from './src/components/navbar/Navbar'
import {MainScreen} from './src/screens/MainScreen'
import { ToDoScreen } from './src/screens/ToDoScreen';

export default function App() {
  const [toDoId,setToDoId]=useState(null)
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

  let content = <MainScreen list={list} addToDo={addToDo} removeToDo={removeToDo} onOpen={setToDoId}/>

  if(toDoId){
    const toDoTitle = list.find(item=>item.id===toDoId)
    content = <ToDoScreen goBack={()=>setToDoId(null)} toDoName={toDoTitle.title}/>
  }


  return (
    <View>
      <Navbar/>
      <View style={style.content}>
         {content}                          
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