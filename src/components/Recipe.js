import IngredientList from "./IngredientList";
import './recipe.css';

const Recipe = ({recipe}) => {

    const ingredients = <IngredientList ingredients={recipe.ingredients}/>;


    return (
        <div className="single-recipe">

            <h3>{recipe.cakeName}</h3>
            
            <p>This cake's ingredients are: {ingredients}</p>
            <p> Cake Rating: {recipe.rating} </p>
        
        </div>

    );
}

export default Recipe;