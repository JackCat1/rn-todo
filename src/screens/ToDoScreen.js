import React,{useState} from 'react'
import {StyleSheet,View,Text} from 'react-native'
import {AntDesign,FontAwesome} from '@expo/vector-icons'
import { THEME } from '../utils/Theme';
import {AppCard} from '../components/ui/AppCard'
import { EditModal } from '../components/EditModal';
import { AppButton } from '../components/ui/AppButton';

export const ToDoScreen = ({goBack,toDoName,onRemove,onSave})=>{
    const [modal,togleModal]=useState(false)
    const saveHandler = title=>{
        togleModal(false)
        onSave(toDoName.id,title)
    }
    return (
        <View style={style.wrap}>
            <EditModal visible={modal} onCancel={()=>togleModal(false)} value={toDoName.title} onSave={saveHandler}/>
            <AppCard style={style.card}>
                <Text style={style.text}>{toDoName.title}</Text>
                <AppButton onPress={()=>togleModal(true)}>
                    <AntDesign name='edit' size={15}/>
                </AppButton>                
            </AppCard>
            
            <View style={style.buttons}> 
                <View style={style.button}>
                    <AppButton onPress={goBack} color={THEME.SUCCESS_COLOR}>
                        <AntDesign name='back' size={20}/>
                    </AppButton>                   
                </View>
                <View style={style.button}>
                    <AppButton onPress={()=>onRemove(toDoName.id)} color={THEME.WARNING_COLOR}>
                        <FontAwesome name='remove' size={20}/>
                    </AppButton>                    
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
    },
    card:{
        marginBottom:20
    }
})