import React,{useState} from 'react';
import { StyleSheet,View,Alert } from 'react-native';
import * as Font from 'expo-font'
import {AppLoading} from 'expo'

import {Navbar} from './src/components/navbar/Navbar'
import {MainScreen} from './src/screens/MainScreen'
import { ToDoScreen } from './src/screens/ToDoScreen';


async function loadApp(){
  await Font.loadAsync({
    'roboto-reg':require('./assets/fonts/Roboto-Regular.ttf'),
    'roboto-bold':require('./assets/fonts/Roboto-Bold.ttf')
  })
}

export default function App() {
  const [isReady,setIsReady]=useState(false)
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
  
  if(!isReady){
    return <AppLoading startAsync={loadApp} onError={err=>console.log(err)} onFinish={()=>setIsReady(true)}/>
  }
  
  const addToDo = title=>{
    setState(prev=>[...prev,{
      id:Date.now().toString(),
      title
    }])
  }
  const removeToDo = id=>{
    const elem = list.find(i=>i.id===id)
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
            setToDoId(null)
            setState(prev => prev.filter(item=>item.id!==id))
          }
        },
      ],
      {cancelable: false},
    );
    
  }
  const updateToDo = (id,title)=>{
    setState(old=>old.map(item=>{
      if(item.id===id){
        item.title=title
      }
      return item
    }))
  }

  let content = <MainScreen list={list} addToDo={addToDo} removeToDo={removeToDo} onOpen={setToDoId}/>

  if(toDoId){
    const toDoTitle = list.find(item=>item.id===toDoId)
    content = <ToDoScreen goBack={()=>setToDoId(null)} toDoName={toDoTitle} onRemove={removeToDo} onSave={updateToDo}/>
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