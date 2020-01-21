import React,{useState,useContext} from 'react'
import {StyleSheet,View,Text} from 'react-native'

import {Navbar} from './navbar/Navbar'
import {MainScreen} from '../screens/MainScreen'
import { ToDoScreen } from '../screens/ToDoScreen';
import { ToDoContext } from '../context/todo/todoContext';
import {ScreenContext} from '../context/screen/screenContext';

export const MainLayout = ()=>{    
    const {todoId} = useContext(ScreenContext)
    
    //   const removeToDo = id=>{
    //     const elem = list.find(i=>i.id===id)
    //     Alert.alert(
    //       'Удаление элемента',
    //       `Вы уверены, что хотите удалить "${elem.title}"?`,
    //       [
    //         {
    //           text: 'Отмена',          
    //           style: 'cancel',
    //         },
    //         {text: 'Удалить', 
    //          style: 'destructive',
    //           onPress: () => {
    //             setToDoId(null)
    //             setState(prev => prev.filter(item=>item.id!==id))
    //           }
    //         },
    //       ],
    //       {cancelable: false},
    //     );
        
    //   }    
     
    return (
        <View>
            <Navbar/>
            <View style={style.content}>
                {todoId?<ToDoScreen/>:<MainScreen/>}                          
            </View>      
        </View>
    )
}

const style = StyleSheet.create({
    content:{
        paddingHorizontal:10,
        paddingVertical:10
    }
})