import './header.css';
import {useRef} from "react";

const Header = ({recipes, setRecipes}) => {
    
    const inputName = useRef();

    const handleSearchRecipe = () => {
        
    }



    return (
        <header className="header">
            <nav className="nav-bar">
                <h1> Bright Bakery</h1>
                <ul className="nav-list">
                    <li>Recipes</li>
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