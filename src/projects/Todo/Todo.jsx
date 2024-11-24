
import {useState, useEffect} from "react";

function Todo(){

    const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('userTodo')) || []);
    const [inputValue, setInputValue] = useState('');

    function onSubmit(e){
      e.preventDefault();
      const updatedData = [...todos, inputValue];
      setTodos(updatedData);
      localStorage.setItem('userTodo', JSON.stringify(updatedData));
      setInputValue('');
    }

    function removeTodo(index){
         const updatedData = todos.filter((todo, i) => i !== index);
        setTodos(updatedData);
        localStorage.setItem('userTodo', JSON.stringify(updatedData));
    }
 
    return (
       <div className="flex items-center justify-center content-center w-[30rem] mx-auto shadow-md flex-col">
         <form onSubmit={onSubmit} className="w-full flex gap-[2rem] flex-row content-center justify-center items-center p-[2rem]">
            <div className="yena-input !w-full">
                <input type="text" placeholder="Add todos..." onChange={(e) => setInputValue(e.target.value)}/>
            </div>
             <button type="submit" className="yena-button-stack --black">Save</button>
         </form>

         <div>
            
         </div>
 
         <div className="w-full p-[1rem]">
              {todos.map((todo, index) => (
                  <div className="flex items-center justify-between w-full" key={index}>
                      <li>{index} {todo}</li>
                      <div className="yena-button-stack" onClick={() => removeTodo(index)}>x</div>
                  </div>
              ))} 
         </div>
       </div>
    )
 }

 export default Todo;