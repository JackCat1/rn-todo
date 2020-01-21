import React,{useState,useContext} from 'react'
import {StyleSheet,View,Text} from 'react-native'

import {Navbar} from './navbar/Navbar'
import {MainScreen} from '../screens/MainScreen'
import { ToDoScreen } from '../screens/ToDoScreen';
import { ToDoContext } from '../context/todo/todoContext';

export const MainLayout = ()=>{
    const {todos,addToDo,removeToDo,updateToDo} = useContext(ToDoContext)
    const [toDoId,setToDoId]=useState(null)
    // const [list,setState] = useState([
    //   {
    //     id:'1',
    //     title:'First'
    //   },
    //   {
    //     id:'2',
    //     title:'Seconnd'
    //   }
    // ])
    // const addToDo = title=>{
    //     setState(prev=>[...prev,{
    //       id:Date.now().toString(),
    //       title
    //     }])
    //   }
    //   const removeToDo = id=>{
    //     const elem = list.find(i=>i.id===id)
    //     Alert.alert(
    //       'Удаление элемента',
    //       `Вы уверены, что хотите удалить "${elem.title}"?`,
    //       [
    //         {
    //           text: 'Отмена',          
    //           style: 'cancel',
    //         },
    //         {text: 'Удалить', 
    //          style: 'destructive',
    //           onPress: () => {
    //             setToDoId(null)
    //             setState(prev => prev.filter(item=>item.id!==id))
    //           }
    //         },
    //       ],
    //       {cancelable: false},
    //     );
        
    //   }
    //   const updateToDo = (id,title)=>{
    //     setState(old=>old.map(item=>{
    //       if(item.id===id){
    //         item.title=title
    //       }
    //       return item
    //     }))
    //   }
    
      let content = <MainScreen list={todos} addToDo={addToDo} removeToDo={removeToDo} onOpen={setToDoId}/>
    
      if(toDoId){
        const toDoTitle = todos.find(item=>item.id===toDoId)
        content = <ToDoScreen goBack={()=>setToDoId(null)} toDoName={toDoTitle} onRemove={removeToDo} onSave={updateToDo}/>
      }
    return (
        <View>
            <Navbar/>
            <View style={style.content}>
                {content}                          
            </View>      
        </View>
    )
}

const style = StyleSheet.create({
    content:{
        paddingHorizontal:10,
        paddingVertical:10
    }
})