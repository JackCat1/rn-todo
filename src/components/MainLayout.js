import React,{useState,useContext} from 'react'
import {StyleSheet,View,Text} from 'react-native'

import {Navbar} from './navbar/Navbar'
import {MainScreen} from '../screens/MainScreen'
import { ToDoScreen } from '../screens/ToDoScreen';
import { ToDoContext } from '../context/todo/todoContext';
import {ScreenContext} from '../context/screen/screenContext';

export const MainLayout = ()=>{    
    const {todoId} = useContext(ScreenContext)
    
    return (
        <View style={style.wrapper}>
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
        paddingVertical:10,
        flex:1
    },
    wrapper:{
        flex:1
    }
})