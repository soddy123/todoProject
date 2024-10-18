import {createContext,useContext} from "react"

export const TodoContext = createContext({
   todos:[
      {
         id:1,
         todo:"Todo msg",
         completed:false,
         //these are the property 
      }
      
   ],
   //these are functionality functionality srif ham nam likhte he
   addTodo:(todo)=>{},
   updateTOdo:(id,Todo)=>{},
   deleteTodo:(id)=>{},
   toggleComplete:(id)=>{}
})

export const useTodo = () => {
    return useContext(TodoContext)
}

export const Todoprovider = TodoContext.Provider