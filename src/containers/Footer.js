import {useRef} from 'react';
import {useState} from 'react';

const Footer = ({recipes, setRecipes}) => {
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

export default Footer;




