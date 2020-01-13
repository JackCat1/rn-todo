import React from 'react'
import {StyleSheet,View,FlatList,Text,TouchableOpacity} from 'react-native'

export const ToDoList = ({list,removeToDo})=>{
    return (
        <View style={style.wrap}>
            <FlatList
                data={list}
                renderItem={({item})=>(
                    <TouchableOpacity onLongPress={()=>removeToDo(item.id)}>
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
        borderColor:'blue',
        marginBottom:5,
        borderRadius:10
    }
})