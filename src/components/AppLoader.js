import React from 'react'
import {StyleSheet,View,ActivityIndicator} from 'react-native'
import { THEME } from '../utils/Theme';

export const AppLoader = ()=>{
    return (
        <View style={style.wrap}>
            <ActivityIndicator size="large" color={THEME.MAIN_COLOR}/>
        </View>
    )
}

const style = StyleSheet.create({
    wrap:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
})