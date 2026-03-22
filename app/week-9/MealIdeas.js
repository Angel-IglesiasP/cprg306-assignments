"use client"

import { useState, useEffect } from "react";

const fetchMealIdeas = async (ingredient) => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const data = await response.json();
    return data.meals || [];
  };
  


export default function MealIdeas({ingredient}){
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        const loadMealIdeas = async () => {
          if (!ingredient){
            setMeals([]);
            return;
          }
          const mealIdeas = await fetchMealIdeas(ingredient);
          setMeals(mealIdeas);
        };
        loadMealIdeas();
      }, [ingredient]);
      return (
        <div className=" bg-gray-300 border-2 border-gray-500 shadow-blue-950 dark:bg-neutral-800 rounded-lg drop-shadow-2xl mb-10 overflow-hidden">
            <h2 className="font-bold text-xl mb-2 mt-3 ">Meal Ideas</h2>
             {ingredient ? <p className="mb-2.5 font-bold">Here are some meal ideas using {ingredient}:</p> : <p className="mb-2.5 font-bold">Select an item to see meal ideas.</p>}

      <ul>
        {meals.map((meal) => (
          <li className="mb-2 border-b border-gray-700" key={meal.idMeal}>{meal.strMeal}</li>
        ))}
      </ul>
        </div>
          );}

