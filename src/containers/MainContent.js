import {useState} from "react";
import RecipeList from '/Users/milk/bnta/coursework/week_10/day_2/bright-bakery/src/components/RecipeList.js';
import React from 'react';
import { useRef } from "react";

const MainContent = ({recipes, setRecipes}) => {

    // write things here
    // use the initial data set
    /*
    const [recipes, setRecipes] = useState([
        {
            cakeName: "Lemon Drizzle",
            ingredients: ["eggs", "butter", "lemon  zest", "sugar", "self-raising flour"],
            rating: 5
        },
        {
            cakeName: "Tea Loaf",
            ingredients: ["eggs", "oil", "dried fruit", "sugar", "self-raising flour", "strong tea"],
            rating: 3
        },
        {
            cakeName: "Brownie",
            ingredients: ["chocolate", "eggs", "flour", "butter", "walnuts"],
            rating: 4
        },
        {
            cakeName: "Carrot Cake",
            ingredients: ["carrots", "walnuts", "oil", "cream cheese", "flour", "sugar"],
            rating: 5
        }
    ]);
    */
    
    // const [updatedRecipe, setRecipes] = useState(recipes);
    
    
    /*
    const inputNameRef = useRef();
    const inputIngredientsRef = useRef();
    const inputRatingRef = useRef();

    const handleAddNewRecipe = () => {
        const cakeName = inputNameRef.current.value;
        const cakeIngredients = inputIngredientsRef.current.value.split(",");
        const cakeRating = inputRatingRef.current.value;

        const newRecipe = {
            cakeName: cakeName,
            ingredients: cakeIngredients,
            rating: cakeRating
        };

        setRecipes(prevRecipes => [...prevRecipes, newRecipe]);
        
        console.log(newRecipe);

        
    }


    const Footer = () => {
        return(
            <>
                
                <form>  
                    <h2>Add New Recipe</h2>
                    <p>Recipe Name <input ref={inputNameRef} type="text" required={true} /></p>
                    <p>Recipe Ingredients <input ref={inputIngredientsRef} type="text" required={true} /></p>
                    <p>Recipe Rating <input ref={inputRatingRef} type="number" min="1" max="5" required={true} /></p>
                    <button type="button" onClick={handleAddNewRecipe}>Submit</button>
                </form>
            
            </>
        );
    }
    */



    return(
        <>
            <RecipeList recipes={recipes} />
            {/* <Footer /> */}
        </>

    );
}

export default MainContent;