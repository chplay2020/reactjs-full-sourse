import { Header } from "./components/Header"
import { Tabs } from "./components/Tabs"
import { TodoList } from "./components/TodoList"
import { TodoInput } from "./components/TodoInput"

import { useState, useEffect } from "react"

function App() {
  // const todos = [
  //   { input: 'Hello! Add your first todo!', complete: true },
  //   { input: 'Get the groceries!', complete: false },
  //   { input: 'Learn how to web design', complete: false },
  //   { input: 'Say hi to gran gran', complete: true },
  // ]

  const [todos, setTodos] = useState([
    { input: 'Hello! Add your first todo!', complete: true }
  ])
  const [selectedTab, setSelectedTab] = useState('Open')

  function handleAddTodo(newTodo) {
    const newTodoList = [...todos, { input: newTodo, complete: false }]
    setTodos(newTodoList)
    handleSaveTodos(newTodoList)
  }

  function handleCompleteTodo(index) {
    //update/edit/modify
    let newTodoList = [...todos]
    let completeTodo = todos[index]
    completeTodo['complete'] = true
    newTodoList[index] = completeTodo
    setTodos(newTodoList)
    handleSaveTodos(newTodoList)
  }

  function handleDeleteTodo(index) {
    let newTodoList = todos.filter((val, valIndex) => {
      return valIndex !== index
    })
    setTodos(newTodoList)
    handleSaveTodos(newTodoList)
  }

  function handleSaveTodos(currTodos) {
    localStorage.setItem("todo-app", JSON.stringify({ todos: currTodos }))
  }

  useEffect(() => {
    if (!localStorage || !localStorage.getItem("todo-app")) {
      return
    }
    console.log("here")
    let db = JSON.parse(localStorage.getItem("todo-app"))
    setTodos(db.todos)
  }, [todos])


  return (
    <>

      <Header todos={todos} />
      <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} todos={todos} />
      <TodoList handleCompleteTodo={handleCompleteTodo} handleDeleteTodo={handleDeleteTodo} selectedTab={selectedTab} todos={todos} />
      <TodoInput handleAddTodo={handleAddTodo} />


    </>
  )
}

export default App
