import logo from './logo.svg';
import './App.css';
import Header from './containers/Header';
import MainContent from './containers/MainContent';
import Footer from './containers/Footer';
import {useState} from "react";
import './containers/header.css';

function App() {

  const [recipes, setRecipes]= useState([
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

const [originDataSet, setOriginDataSet] = useState([
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


// function addCake(newCake){
//   const updateCake = [...recipes, newCake];
//   setRecipes(updateCake);
// }

  return (
    <div className="App">
      <Header setRecipes={setRecipes} originDataSet={originDataSet}/>
      <MainContent recipes={recipes} setRecipes={setRecipes}/>
      <Footer originDataSet={originDataSet} setOriginDataSet={setOriginDataSet} />
      
    </div>
  );
}

export default App;
