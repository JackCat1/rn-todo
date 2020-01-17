import React from 'react'
import {StyleSheet,View,Text,Button} from 'react-native'
import { THEME } from '../utils/Theme';
import {AppCard} from '../components/ui/AppCard'

export const ToDoScreen = ({goBack,toDoName})=>{
    return (
        <View style={style.wrap}>
            <AppCard>
                <Text style={style.text}>{toDoName}</Text>
                <Button title='Ред'/>
            </AppCard>
            
            <View style={style.buttons}> 
                <View style={style.button}>
                   <Button title='Назад' onPress={goBack} color={THEME.WARNING_COLOR}/> 
                </View>
                <View style={style.button}>
                    <Button title='Удалить' onPress={goBack} color={THEME.SUCCESS_COLOR}/>
                </View>
            </View>            
        </View>
    )
}

const style = StyleSheet.create({
    wrap:{},
    buttons:{
        flexDirection:'row',
        justifyContent:"space-around"
    },
    button:{
        width:'40%'
    },
    text:{
        fontSize:26
    }
})