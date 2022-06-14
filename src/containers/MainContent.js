import {useState} from "react";
import RecipeList from '/Users/milk/bnta/coursework/week_10/day_2/bright-bakery/src/components/RecipeList.js';
import React from 'react';
import { useRef } from "react";

const MainContent = ({recipes, setRecipes}) => {

    // write things here
    // use the initial data set
    
    return(
        <>
            <RecipeList recipes={recipes} />
        </>

    );
}

export default MainContent;