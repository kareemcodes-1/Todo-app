import { createContext, useContext, useEffect, useState } from "react";



const TodoContext = createContext();

export function TodoProvider({children}){

    const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('userTodos')) || []);

    const [todo, setTodo] = useState({});


    useEffect(() => {
        getTodos();
    }, []);

    function getTodos(){
        setTodos(JSON.parse(localStorage.getItem('userTodos')) || []);
    }


    function completeTodo(todo){
        const updatedTodo = todos.map((t) => {
            if(t.name === todo.name){
                return {
                    ...todo,
                    isComplete: !t.isComplete,
                }
            }else{
                return t;
            }
        });

        setTodos(updatedTodo);
        localStorage.setItem('userTodos', JSON.stringify(updatedTodo));
    }

    function findTodo(todo){
        setTodo(todo);
    }

    function deleteTodo(todo){
        const updatedTodo = todos.filter((t) => t.name !== todo.name);
        setTodos(updatedTodo);
        localStorage.setItem('userTodos', JSON.stringify(updatedTodo));
    }

    function editTodo(todo, newInputValue){
        const updatedTodo = todos.map((t) => {
            if(t.name === todo.name){
                return {
                    ...t,
                    name: newInputValue
                }
            }else{
                return t;
            }
        });

        setTodos(updatedTodo);
        localStorage.setItem('userTodos', JSON.stringify(updatedTodo));
    }

    return (
        <TodoContext.Provider value={{todos, getTodos, completeTodo, deleteTodo, findTodo, todo, editTodo}}>
            {children}
        </TodoContext.Provider>
    )
};

export const useTodo = () => useContext(TodoContext);

