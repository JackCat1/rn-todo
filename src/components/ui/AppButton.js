import React from 'react'
import {StyleSheet,View,TouchableOpacity, Text} from 'react-native'
import { THEME } from '../../utils/Theme'

export const AppButton = ({children,onPress,color=THEME.MAIN_COLOR})=>{
    return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
            <View style={{...style.button,backgroundColor:color}}>
                <Text style={style.text}>{children}</Text>
            </View>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    button:{
        flexDirection:'row',
        justifyContent:"center",
        alignItems:"center",
        padding:10,
        borderRadius:5,
    },
    text:{
        color:'#fff'
    }
})