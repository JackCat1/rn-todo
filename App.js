import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {Navbar} from './src/components/navbar/Navbar'
import { ToDoForm } from './src/components/toDoForm/ToDoForm';

export default function App() {
  return (
    <View>
      <Navbar/>
      <View style={style.content}>
        <ToDoForm/>
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