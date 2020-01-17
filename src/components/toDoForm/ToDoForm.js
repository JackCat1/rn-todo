import React,{useState} from 'react'
import {StyleSheet,View,TextInput,Button} from 'react-native'
import { THEME } from '../../utils/Theme';

export const ToDoForm = ({addToDo})=>{
    const [value,onChangeText]=useState('')
    const sendToDo = (title)=>{
        addToDo(title)
        onChangeText('')
    }
    return (
        <View style={style.wrap}>
            <TextInput 
                style={style.input}
                onChangeText={onChangeText}
                value={value}
            />
            <Button title="Добавить" onPress={()=>sendToDo(value)}/>
        </View>
    )
}

const style = StyleSheet.create({
    wrap:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
        
    },
    input:{
        width:'70%',
        padding:10,
        borderStyle:'solid',
        borderBottomWidth:1,
        borderBottomColor:THEME.MAIN_COLOR
    }
})