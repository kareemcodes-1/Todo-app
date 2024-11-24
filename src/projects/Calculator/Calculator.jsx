import { useState } from "react";

function Calculator(){

    const [inputValue, setInputValue] = useState('');

     function addNums(value){
        setInputValue(inputValue + value);
     }

     function onSubmit(e){
        e.preventDefault();
        const result = eval(inputValue);
        setInputValue(result);
     }

    return (
        <div>
            <h1>Calculator</h1>

            <form onSubmit={onSubmit} className="w-[50%] flex items-center justify-center flex-col">
            <div className="flex items-center justify-between">
            <input type="text" className="text-[2rem] w-[50%]" name="" id="" placeholder="Enter value" disabled value={inputValue}/>
            <button type="submit">Save</button>
            </div>
                <div className="grid grid-cols-4 gap-[3rem]">  
                <button type="button" className="text-[3rem]" onClick={(e) => addNums(e.target.value)} value={'+'}>+</button>
                <button type="button" className="text-[3rem]" onClick={(e) => addNums(e.target.value)} value={'-'}>-</button>
                <button type="button" className="text-[3rem]" onClick={(e) => addNums(e.target.value)} value={'&'}>%</button>
                <button type="button" className="text-[3rem]" onClick={(e) => addNums(e.target.value)} value={'*'}>*</button>
                <button type="button" className="text-[3rem]" onClick={(e) => addNums(e.target.value)} value={'0'}>0</button>
                <button type="button" className="text-[3rem]" onClick={(e) => addNums(e.target.value)} value={'1'}>1</button>
                <button type="button" className="text-[3rem]" onClick={(e) => addNums(e.target.value)} value={'2'}>2</button>
                <button type="button" className="text-[3rem]" onClick={(e) => addNums(e.target.value)} value={'3'}>3</button>
                <button type="button" className="text-[3rem]">4</button>
                <button type="button" className="text-[3rem]">5</button>
                <button type="button" className="text-[3rem]">6</button>
                <button type="button" className="text-[3rem]">7</button>
                <button type="button" className="text-[3rem]">8</button>
                <button type="button" className="text-[3rem]">9</button>
                </div>
            </form>
        </div>
    )
}

export default Calculator;