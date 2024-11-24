import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Meals = () => {

    const [meals, setMeals] = useState([]);

    useEffect(() => {
      getMeals();
    }, []);

    async function getMeals(){
      try {
        const res = await axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood');
        const data = res.data.meals; 
        setMeals(data);
        console.log(data.length);
       } catch (error) {
          console.log(error);
       }
    }


  return (
    <div className='grid grid-cols-4 gap-[1rem]'>{meals.map((meal, index) => (
        <div key={meal.strMeal} className='flex flex-col gap-[.5rem]'>
            <img src={meal.strMealThumb} alt="" className='w-[20rem] h-[20rem] object-cover'/>
            <h1 className='text-center text-[1.3rem]'>{meal.strMeal}</h1>
        </div>
    ))}
    </div>
  )
}

export default Meals