import React, { useState, useMemo } from 'react'
import { useQuery } from 'react-query';
import Select from 'react-select';
import { getIngredients } from '../../Scripts/network-functions';
import styles from './SearchBar.module.css'

const SearchBar = ({setSearchTerm}) => {
    const [inputValue, setInputValue] = useState({ Label: "", Value: ""});

    const { data, error } = useQuery("ingredients", getIngredients);

    // get the list of ingredients and make them look pretty for the select box
    const ingredients = useMemo(() => {
        if (!data) return;
        return data.drinks
            .map((it) => ({
                value: it.strIngredient1,
                label: it.strIngredient1,
            }))
            .sort((a, b) =>
                a.label > b.label ? 1 : b.label > a.label ? -1 : 0
            );
        }, [data]);

    const handleSearchClick = () => {
        setSearchTerm(inputValue.value);
    }
    
    if (error) return <h6>there has been an error, oops</h6>;

    return (
        <div className = {styles.main}>
            <div className={styles.searchInput} >
                <Select
                    value={inputValue}
                    name="search"
                    options={ingredients}
                    onChange={(e) => setInputValue(e ?? { label: "", value: "" })}
                />
            </div>
            <button className={styles.searchButton} onClick={handleSearchClick}>
                Search
            </button>
        </div>
    )
}

export default SearchBar