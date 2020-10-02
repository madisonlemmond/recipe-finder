import React from 'react';
import styles from './SearchBar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchBar = ({ value, handleChange, handleSubmit }) => {

    return(
        
        <div className={styles.searchBar}>
            <input className={styles.searchInput} value={value} onChange={handleChange} type="text" placeholder="Find a Recipe..." />
            <button className={styles.submitButton} type="submit" onClick={handleSubmit}>
                <FontAwesomeIcon icon={faSearch} size="lg" color="gray" />
            </button>
        </div>
    )
}

export default SearchBar;