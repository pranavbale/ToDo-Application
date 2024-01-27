import { useEffect, useState } from 'react';
import './App.css';
import { TodoProvder } from './context/TodoContext';
import { TodoForm, TodoItem } from './components';

function App() {

  const [todos, setTodos] = useState([]);


   const addTodo = (todo) => {
    setTodos((prev) => [...prev, {...todo}])
   }

   const updatedTodo = (todo, id) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)));
   }

   const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id));
   }
   
   const toggleCompleted = (id) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? {...prevTodo, completed : !prevTodo.completed}: prevTodo))
   }


   // to store a todos into the local storage
   useEffect(() => {

    // JSON.parse used to convert string into json format 
    // local sotrage store a data in String format so firstly change it into Json format 
     const todos = JSON.parse(localStorage.getItem("todos"));

     if (todos && todos.length > 0) {
      setTodos(todos);
     }
   }, [])

   // to get the todos from the local storage
   useEffect(() => {
    // JSON.stringify is used to convert a json to string
    // when any data store into local storage then it must be string 
     localStorage.setItem('todos', JSON.stringify(todos));
   }, [todos])
   


   
   
  return (
    <TodoProvder value={{todos, addTodo, deleteTodo, updatedTodo, toggleCompleted}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* call todo form */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
             {
              todos.map((todo) => (
                <div key={todo.id}
                 className='w-full'>
                  <TodoItem todo={todo}/ >
                </div>
              ))
             }
          </div>
        </div>
      </div>
    </TodoProvder> 
  );
}

export default App;