import React from 'react'
import {StyleSheet,View,Text} from 'react-native'
import {THEME} from '../../utils/Theme'

export const Navbar = ()=>{
    return (
        <View style={style.navbar}>
            <Text style={style.text}>ToDo App</Text>
        </View>
    )
}

const style = StyleSheet.create({
    navbar:{
        backgroundColor:THEME.MAIN_COLOR,
        height:70,        
        alignItems:'center',
        justifyContent:'flex-end',
        paddingBottom:10
    },
    text:{
        color:'white',
        fontSize:20
    }
})
