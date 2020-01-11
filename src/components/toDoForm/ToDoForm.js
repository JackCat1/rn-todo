import React from 'react'
import {StyleSheet,View,TextInput,Button} from 'react-native'

export const ToDoForm = ()=>{
    return (
        <View style={style.wrap}>
            <TextInput style={style.input}/>
            <Button title="Добавить"/>
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
        borderBottomColor:'blue'
    }
})