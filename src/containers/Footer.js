import {useRef} from 'react';
import {useState} from 'react';
import './footer.css'

const Footer = ({originDataSet, setOriginDataSet}) => {
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

        
        setOriginDataSet(prevRecipes => [...prevRecipes, newRecipe]);
        
        console.log(newRecipe);

    }

    return(
        <>
            <form className="add-new-recipe-form">  
                <h2>Add New Recipe</h2>
                <p>Recipe Name <input ref={inputNameRef} type="text" required={true} /></p>
                <p>Recipe Ingredients <input ref={inputIngredientsRef} type="text" required={true} /></p>
                <p>Recipe Rating <input ref={inputRatingRef} type="number" min="1" max="5" required={true} /></p>
                <button onClick={handleAddNewRecipe}>Submit</button>
            </form>
        
        </>
    );



}

export default Footer;




