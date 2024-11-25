import React, { useState } from 'react'
import CreateTodo from './modals/CreateTodo';

const TodoForm = () => {

    const [modal, setModal] = useState(false);

  return (
    
    <div>
         {modal && <CreateTodo closeModal={() => setModal(false)}/>}
        <div className='flex items-center justify-between lg:p-[4rem] py-[3rem] px-[1rem]'>
              <h1 className='text-[3rem]'>Todo</h1>
             <button type="button" onClick={() => setModal(true)} className='bg-white shadow-lg py-[.7rem] px-[1rem] border rounded-[.5rem] text-[1rem]'>Add Todo</button>
        </div>
    </div>
  )
}

export default TodoForm