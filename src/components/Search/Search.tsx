import React from 'react';
import styles from './Search.module.css';

import { FaSearch } from 'react-icons/fa';
import { FiTarget } from 'react-icons/fi';

const Search = () => {
    return (
        <div className={styles.Search}>
            <FaSearch />

            <input type='text' />

            <FiTarget />
        </div>
    );
};

export default Search;
