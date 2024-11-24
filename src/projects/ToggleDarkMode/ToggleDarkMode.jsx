import { useState } from "react";

function ToggleDarkMode(){
    const [light, setLight] = useState(true);

    function changeBg(){
        setLight((prevState) => !prevState);
    }

    return (
        <div className="w-full h-screen" style={light ? {background: "#fff"} : {background: "#000"}}>
            <h1 className="text-[5rem]" style={light ? {color: "#000"} : {color: "#fff"}}>Hello World</h1>
            <button type="button" style={light ? {color: "#000"} : {color: "#fff"}} onClick={changeBg}>{light ? "Light" : "Dark"}</button>
        </div>
    )
}

export default ToggleDarkMode;