import React, { useState } from 'react'
import styles from './SearchBar.module.css'

const SearchBar = ({setSearchTerm}) => {
    const [inputValue, setInputValue] = useState({ Label: "", Value: ""});

    const handleSearchClick = () => {
        setSearchTerm(inputValue.value);
    }
    
    return (
        <div className = {styles.main}>SearchBar</div>
    )
}

export default SearchBar