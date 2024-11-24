import { useEffect, useState } from "react";

function Testimonials(){

    const [testimonials, setTestimonials] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        fetch('https://testimonialapi.vercel.app/api', {
            method: "GET",
        })
        .then((res) => res.json())
        .then((data) => 
        setTestimonials(data)
        ).finally(() => {
            setLoading(false);
        })
        
    }, [testimonials]);

    function handleDecrement (){
        if(currentIndex >= 1){
            setCurrentIndex((prevState) => prevState - 1);
        }else{
            alert('Finished');
        }
    }

    function handleIncrement (){
        if(currentIndex < 9){
            setCurrentIndex((prevState) => prevState + 1);
        }else if(currentIndex === 9){
            alert('Finished');
        }
    }

    return (
        <div>
            <h1>Testimonials</h1>
            <div className="">
                 <button className="text-[2rem]" onClick={() => handleDecrement()}>-</button>
                 {loading ? (
                    <h1>Loading...</h1>
                 ) : (
                    testimonials.length > 0 && (
                        <><h1>{testimonials[currentIndex].name}</h1>
                        <p>{testimonials[currentIndex].message}</p></>
                     )
                 )}
                  <button className="text-[2rem]" onClick={() => handleIncrement()}>+</button>
            </div>
        </div>
    )
}

export default Testimonials;