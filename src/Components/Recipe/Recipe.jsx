import React from "react";
import Ingredients from "../Ingredients/Ingredients";
import Measures from "../Measures/Measures";
import styles from "./Recipe.module.css";

const Recipe = ({ recipe }) => {
    return (
        <div className={styles.main}>
            {/* show thumbnail when it exist */}
            {recipe.strDrinkThumb ? (
                <img
                    src={recipe.strDrinkThumb}
                    className={styles.backgroundImage}
                    alt={recipe.strDrink ?? ""}
                />
            ) : null}
            {/* show the recipte */}
            <div className={styles.content}>
                <h1>{recipe.strDrink}</h1>
                <div style={{ display: "flex" }}>
                    <Ingredients recipe={recipe} />
                    <Measures recipe={recipe} />
                </div>
                <h2>Glass</h2>
                <ul>
                    <li>{recipe.strGlass}</li>
                </ul>

                <p>{recipe.strInstructions}</p>
            </div>
        </div>
    );
};

export default Recipe;