import React from 'react'
import {StyleSheet,View,Text} from 'react-native'

export const Navbar = ()=>{
    return (
        <View style={style.navbar}>
            <Text style={style.text}>ToDo App!</Text>
        </View>
    )
}

const style = StyleSheet.create({
    navbar:{
        backgroundColor:'blue',
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
