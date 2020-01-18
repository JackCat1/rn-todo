import React,{useState} from 'react'
import {StyleSheet,View,Modal,TextInput,Button,Alert} from 'react-native'
import { THEME } from '../utils/Theme'
import { AppButton } from './ui/AppButton'

export const EditModal = ({visible,onCancel,value,onSave})=>{
    const [title,setTitle]=useState(value)
    const saveHandler = ()=>{
        if(title.trim().length<3){
            Alert.alert('Ошибка','Название не должно быть менее 3 символов')
        }else{
            onSave(title)
        }
    }
    return (
        <Modal visible={visible} animationType='slide'>
            <View style={style.wrap}>
                <TextInput style={style.input} placeholder='Укажите название' value={title} onChangeText={setTitle}/>
                <View style={style.buttons}>
                    <AppButton onPress={onCancel} color={THEME.WARNING_COLOR}>
                        Отменить
                    </AppButton>
                   <AppButton color={THEME.SUCCESS_COLOR} onPress={saveHandler}>
                       Сохранить
                   </AppButton>                    
                </View>                
            </View>
        </Modal>
    )
}

const style = StyleSheet.create({
    wrap:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    input:{
        padding:10,
        borderBottomColor:THEME.MAIN_COLOR,
        borderBottomWidth:2,
        width:'80%',
        marginBottom:10
    },
    buttons:{
        flexDirection:'row',
        justifyContent:"space-around",
        width:'80%'
    }
})