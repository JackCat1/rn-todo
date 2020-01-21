import React,{useState} from 'react';
import { StyleSheet,View,Alert } from 'react-native';
import * as Font from 'expo-font'
import {AppLoading} from 'expo'



import { MainLayout } from './src/components/MainLayout';
import {ToDoState} from './src/context/todo/ToDoState';


async function loadApp(){
  await Font.loadAsync({
    'roboto-reg':require('./assets/fonts/Roboto-Regular.ttf'),
    'roboto-bold':require('./assets/fonts/Roboto-Bold.ttf')
  })
}

export default function App() {
  const [isReady,setIsReady]=useState(false)
 
  
  if(!isReady){
    return <AppLoading startAsync={loadApp} onError={err=>console.log(err)} onFinish={()=>setIsReady(true)}/>
  }
  
  


  return (
    <ToDoState>
      <MainLayout/>
    </ToDoState>
  )
}

