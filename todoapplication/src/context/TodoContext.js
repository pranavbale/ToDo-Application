import { useContext, createContext } from "react";

export const TodoContext = createContext({
    todos : [
        {
            id : 1,
            todo : "todo msg",
            completed : false,
        }
    ],
    addTodo : (todo) => {},
    updatedTodo : (todo, id) => {},
    deleteTodo : (id) => {},
    toggleCompleted : (id) => {},
});


export const useTodo = () => {
    return useContext(TodoContext);
}

export  const TodoProvder = TodoContext.Provider;