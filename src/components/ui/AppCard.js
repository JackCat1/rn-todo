import React from 'react'
import {StyleSheet,View} from 'react-native'

export const AppCard = props=>{
    return (
        <View style={style.wrap}>
            {props.children}
        </View>
    )
}

const style = StyleSheet.create({
    wrap:{
        borderWidth:2,
        borderColor:'green',
        padding:20,
        flexDirection:'row',
        justifyContent:"space-between",
    }
})