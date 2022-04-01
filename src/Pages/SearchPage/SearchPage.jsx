import React, { useState } from "react";
import SearchBar from "../../Components/SearchBar/SearchBar";
import SearchResults from "../../Components/SearchResults/SearchResults";
import styles from "./SearchPage.module.css"

const SearchPage = () => {
    const [searchTerm, setSearchTerm] = useState("")
    return (
        <div className = {styles.main}>
            <SearchBar setSearchTerm={setSearchTerm} />
            {!!searchTerm ? <SearchResults searchTerm={searchTerm}/> : null}
        </div>
    )
}

export default SearchPage