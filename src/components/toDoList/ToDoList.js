import React from 'react'
import {StyleSheet,View,FlatList,Text,TouchableOpacity} from 'react-native'
import { THEME } from '../../utils/Theme';

export const ToDoList = ({list,removeToDo,onOpen})=>{
    return (
        <View style={style.wrap}>
            <FlatList
                data={list}
                renderItem={({item})=>(
                    <TouchableOpacity onLongPress={()=>removeToDo(item.id)} onPress={()=>onOpen(item.id)}>
                        <Text style={style.item}>{item.title}</Text>
                    </TouchableOpacity>                    
                )}
                keyExtractor={item=>item.id}
            />
        </View>
    )
}

const style = StyleSheet.create({
    wrap:{
        paddingVertical:10
    },
    item:{
        flexDirection:'row',
        padding:10,
        borderWidth:1,
        borderStyle:'solid',
        borderColor:THEME.MAIN_COLOR,
        marginBottom:5,
        borderRadius:10,
        fontFamily:'roboto-bold'
    }
})