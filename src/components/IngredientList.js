
const IngredientList = ({ingredients}) => {

    // ["eggs", "butter", "lemon  zest", "sugar", "self-raising flour"]
    // 
    const ingredientListMap = ingredients.map((ingredient, index) => {
        
        return (<li key={index}> {ingredient}</li>);
    }); 

    return (
        <>
            {ingredientListMap}
        
        </>
    )
}

export default IngredientList;