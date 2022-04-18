
import React, { useMemo } from "react";
import { useQuery } from "react-query";
import { getCocktails } from "../../Scripts/network-functions";
import ResultCard from "../ResultCard/ResultCard";
import styles from './SearchResults.module.css';

const SearchResults = ({ searchFor }) => {
    // gets list of cocktails with the ingredient that we searchedFor
    const { data, error } = useQuery(["drink search", searchFor], () =>
        getCocktails(searchFor)
    );
    // remembers the last thing searched, if its the same gives the same set of data
    const cocktails = useMemo(() => {
        // if no data return
        if (!data) return;
        return data.drinks;
    }, [data]);
    // show the list of cocktails
    console.log('cocktails', cocktails)
    // if there is an error, show it
    if (error) return <h2>an unknown error has occurred</h2>;

    return (
        <div className={styles.main}>
            {/* only map through cocktails if they exist */}
            {cocktails && cocktails.map((it) => (
                <ResultCard card={it} key={it.idDrink} />
            ))}
        </div>
    );
};

export default SearchResults;