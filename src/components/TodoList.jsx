import { PenBox, Trash } from 'lucide-react';
import { useTodo } from '../../actions/index'
import React, { useState } from 'react'
import EditTodo from './modals/EditTodo';

const TodoList = () => {

    const {todos, completeTodo, deleteTodo, findTodo} = useTodo();

    const [editMode, setEditMode] = useState(false);

  return (
   <>
    {editMode && <EditTodo closeModal={() => setEditMode(false)}/>}
    <div className='flex items-center justify-center flex-col gap-[1rem] mx-auto lg:px-[4rem] px-[1rem]'>
         {todos.map((todo, index) => (
            <div key={index} className='border shadow-md bg-[#fff] w-full h-[4rem] rounded-[1rem] p-[1rem]  flex items-center justify-between'>
            <div className='flex items-center gap-[1rem]'>
            {todo.isComplete ? <input onClick={() => completeTodo(todo)} type="checkbox" checked  className="checkbox" /> : <input onClick={() => completeTodo(todo)} type="checkbox"   className="checkbox" />}
            <h2 className='text-[1.5rem]'>{todo.name}</h2>
            </div>

            <div className='flex items-center gap-[1.5rem]'>
                <button type="button" onClick={() => {setEditMode(true); findTodo(todo)}}><PenBox className='text-[2rem]'/></button>
                <button type="button" onClick={() => deleteTodo(todo)}><Trash className='text-[2rem] text-red-500'/></button>
            </div>
         </div>

           
         ))}
    </div>
   </>
  )
}

export default TodoList