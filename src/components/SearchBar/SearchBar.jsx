import React, { useEffect } from "react";
import styles from "./SearchBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBar = ({ value, handleChange, handleKeyDown, handleSubmit }) => {
    const searchInput = React.useRef(null);

    useEffect(() => {
      searchInput.current.focus();
    }, [value]);

    return (
        <div className={styles.searchBar}>
        <input
            className={styles.searchInput}
            id="recipe"
            name="recipe"
            value={value}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            type="text"
            placeholder="Find a Recipe..."
            ref={searchInput}
        />
        <button
            className={styles.submitButton}
            type="submit"
            onClick={handleSubmit}
        >
            <FontAwesomeIcon icon={faSearch} size="lg" color="gray" />
        </button>
        </div>
    );
};

export default SearchBar;
