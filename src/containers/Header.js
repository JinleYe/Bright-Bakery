import './header.css';
import {useRef} from "react";

const Header = ({setRecipes, originDataSet}) => {
    
    const inputName = useRef();



    const handleSearchRecipe = () => {
        const name = inputName.current.value;

        const searchResultRecipes = originDataSet.filter(item => 
            item.cakeName.toLowerCase().includes(name.toLowerCase()))
            .map(item => {return item});
        
        setRecipes(searchResultRecipes);
        console.log(searchResultRecipes)
    }

    const showAllRecipes = () => {
        setRecipes(originDataSet);
    }



    return (
        <header className="header">
            <nav className="nav-bar">
                <h1> Bright Bakery</h1>
                <ul className="nav-list">
                    <li><a href='#' onClick={showAllRecipes}>Recipes</a></li>
                    <li>Review</li>
                    <li>Contact</li>
                    <li>
                        <input ref={inputName}type="text" className="nav-search"/>
                        <button className="nav-search-button" onClick={handleSearchRecipe}>🔍</button>
                    </li>
                </ul>
            </nav>
        </header>
    )

}

export default Header;