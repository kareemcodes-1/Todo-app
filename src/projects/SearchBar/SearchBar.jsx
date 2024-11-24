import { useState } from "react";

function SearchBar(){

    const [isClicked, setIsClicked] = useState(false);

    return (
        <div className="flex items-center justify-center">
            {
                isClicked ? <div className="yena-input !w-[20%]"><input type="text" name="" id="" /></div> : ""
            }
            <button onClick={() => setIsClicked((prevState) => !prevState)}>{isClicked ? "Close" : "Search"}</button>
        </div>
    )
}

export default SearchBar;