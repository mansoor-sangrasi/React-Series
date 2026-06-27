import { useState,useEffect } from 'react'

import './App.css'
import { TodoProvider } from './Context'
import TodoForm from './Components/TodoForm'
import TodoItem from './Components/TodoItem'

function App() {
  const [todos,setTodos]=useState([])

  const addTodo=(todo)=>{
    setTodos((prev_todo)=>[{id:Date.now(),...todo},...prev_todo])

  }
  const updateTodo=(id,todo)=>{
    setTodos((prev_todo)=>(prev_todo.map((todo_element)=>(todo_element.id===id? todo: prev_todo))))

  }
  const deleteTodo=(id)=>{
    setTodos((prev_todo)=>prev_todo.filter((todo_element)=>todo_element.id!==id))    
  }
  const toggleComplete=(id)=>{
    setTodos((prev_todo)=>prev_todo.map((todo_element)=>todo_element.id===id?{...todo_element,completed:!todo_element.completed}:todo_element))
  }
  useEffect(() => {
    const todos=JSON.parse(localStorage.getItem("todos"))
    if(todos && todos.length>0){
      setTodos(todos)
    }   
  }, [])
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])

  
   


  
  

  return (
    <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                      <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo)=>(
                          <div key={todo.id}
                           className='w-full'>
                            <TodoItem todo={todo}/>

                          </div>


                        ))}
                           

                        
                    </div>
                </div>
            </div>
     </TodoProvider>
    
  )
}

export default App
