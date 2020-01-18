import React,{useState} from 'react'
import {StyleSheet,View,TextInput,Alert,Keyboard} from 'react-native'
import { THEME } from '../../utils/Theme';
import { AppButton } from '../ui/AppButton';

export const ToDoForm = ({addToDo})=>{
    const [value,onChangeText]=useState('')
    const sendToDo = (title)=>{
        if(title){
            addToDo(title)
            onChangeText('')
            Keyboard.dismiss()
        }else{
           Alert.alert('Ошибка','Название не должно быть пустым') 
        }        
    }
    return (
        <View style={style.wrap}>
            <TextInput 
                style={style.input}
                onChangeText={onChangeText}
                value={value}
            />
            <AppButton onPress={()=>sendToDo(value)}>
                Добавить
            </AppButton>
            
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