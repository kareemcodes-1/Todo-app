import gsap from 'gsap';
import { useTodo } from '../../../actions/index';
import React, { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

const EditTodo = ({closeModal}) => {

    const {todo, editTodo} = useTodo();
    const [newInputValue, setNewInputValue] = useState(todo.name);
    const ref = useRef(null);

    useEffect(() => {
        gsap.fromTo(ref.current, 
            {
                scale: 0.3,
                opacity: 0,
                duration: 0.2,
            },
            {
                scale: 1,
                opacity: 1,
                duration: 0.2,
            },

            
        )
    }, []);
     
    function onSubmit(e) {
        e.preventDefault();
        if (newInputValue.trim()){ 
        editTodo(todo, newInputValue);
        setNewInputValue('');
        closeModal(); 
        } 

    }


  return (
    createPortal(
        <div ref={ref} className='fixed w-full h-screen top-0 left-0 right-0'> 
            <div className='bg-[#0000004f] fixed top-0 w-full h-screen' onClick={closeModal}/>
            <form onSubmit={onSubmit} className='flex items-center justify-center mx-auto gap-[1rem] mt-[10rem]'>
            <div className='bg-[#fff] z-[1000] p-[1rem] w-[50%] rounded-[1rem] flex items-center justify-center'>
                <input type="text" value={newInputValue} className='w-full h-full bg-transparent outline-none' placeholder='Enter todo...'  onChange={(e) => setNewInputValue(e.target.value)}/>
            </div>

            <button className='border z-[1000] shadow-md bg-[#fff] w-[5rem] rounded-[1rem] py-[.7rem] px-[1rem] gap-[1rem]' type='submit'>Save</button>
            </form>
        </div>, document.body
    )
  )
}

export default EditTodo