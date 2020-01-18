import React from 'react'
import {StyleSheet,View} from 'react-native'

export const AppCard = props=>{
    return (
        <View style={{...style.wrap,...props.style}}>
            {props.children}
        </View>
    )
}

const style = StyleSheet.create({
    wrap:{
        backgroundColor:'#fff',
        borderRadius:10,        
        padding:20,
        flexDirection:'row',
        justifyContent:"space-between",
        shadowColor:'#000',
        shadowRadius:2,
        shadowOffset:{width:2,height:2},
        shadowOpacity:0.3,
        elevation:8
    }
})