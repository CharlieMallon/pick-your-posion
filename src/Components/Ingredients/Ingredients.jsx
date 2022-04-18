import React, { useMemo, Fragment } from "react";
import Ingredient from "../Ingredient/Ingredient";

const Ingredients = ({ recipe }) => {
    // create an array of the recipe ingredients removing the nulls
    const ingredients = useMemo(() => {
        return Object.keys(recipe)
            .filter((it) => it.includes("strIngredient"))
            .map((it) => ({
                ingredientName: it,
                ingredient: recipe[it],
            }))
        .filter((it) => it.ingredient);
    }, [recipe]);
    return (
        <Fragment>
        {ingredients && (
            <Fragment>
            <ul style={{listStyleType: 'none', paddingLeft: '10px'}}>
                {ingredients.map((ingredient) => (
                <Ingredient key={ingredient.ingredientName} ingredient={ingredient} />
                ))}
            </ul>
            </Fragment>
        )}
        </Fragment>
    );
};

export default Ingredients;