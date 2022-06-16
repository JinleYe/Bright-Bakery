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
                <table>
                <tr><td><p>Recipe Name</p></td><td><input ref={inputNameRef} type="text" required={true} /></td></tr>
                <tr><td><p>Recipe Ingredients</p></td><td><input ref={inputIngredientsRef} type="text" required={true} /></td></tr>
                <tr><td><p>Recipe Rating</p></td> <td><input ref={inputRatingRef} type="number" min="1" max="5" required={true} /></td></tr>
                </table>
                <button onClick={handleAddNewRecipe}>Submit</button>
            </form>
        
        </>
    );



}

export default Footer;




