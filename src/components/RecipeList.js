import Recipe from "./Recipe";

//'recipes'?
const RecipeList = ({recipes}) => {
    
    const RecipeComponents = recipes.map((recipe, index) => {
        return <Recipe key={index}
                    recipe={recipe} /> 
    })   

    return (
        <>
            {RecipeComponents}
        </>
    );
}

export default RecipeList;