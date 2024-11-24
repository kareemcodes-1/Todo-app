import { useState } from "react";

function Form(){

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorName, setErrorName] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [errorPassword, setErrorPassword] = useState('');
    const [errorConfirmPassword, setErrorConfirmPassword] = useState('');
    const [error, setError] = useState(false);

    function onSubmit(e){
        e.preventDefault();
        if(name.length < 5){
            setError(true);
            setErrorName('Name should be more than 5');
        }else if(!email.includes('@')){
            setError(true);
            setErrorEmail('Email should contain @'); 
        }else if(confirmPassword !== password){
            setError(true);
            setErrorConfirmPassword("Confirm password and password doesn't match"); 
        }
    }

    return (
        <form className="" onSubmit={onSubmit}>
            <div className="yena-input">
            <input type="text" className={`${error ? '!border-red-500' : ''}`} name="" id="" onChange={(e) => setName(e.target.value)}/>
            <div className="text-red-500">{errorName}</div>
            </div>
            <div className="yena-input">
            <input type="email" className={`${error ? '!border-red-500' : ''}`} name="" id="" onChange={(e) => setEmail(e.target.value)}/>
            <div className="text-red-500">{errorEmail}</div>
            </div>
            <div className="yena-input">
            <input type="password" className={`${error ? '!border-red-500' : ''}`} name="" id="" onChange={(e) => setPassword(e.target.value)}/>
            <div className="text-red-500">{errorPassword}</div>
            </div>
            <div className="yena-input">
            <input type="password" className={`${error ? '!border-red-500' : ''}`} name="" id="" onChange={(e) => setConfirmPassword(e.target.value)}/>
            <div className="text-red-500">{errorConfirmPassword}</div>
            </div>
            <button type="submit">Save</button>
        </form>
    )
}

export default Form;