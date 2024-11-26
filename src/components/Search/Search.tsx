import React, { useState } from 'react';
import styles from './Search.module.css';

import { FaSearch } from 'react-icons/fa';
import { FiTarget } from 'react-icons/fi';

const Search = () => {
	const [searchValue, setSearchValue] = useState<string>('');

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchValue(event.target.value);
	};

	return (
		<div className={styles.Search}>
			<FaSearch />

			<input type='text' value={searchValue} onChange={handleChange} />

			<button>
				<FiTarget />
			</button>
		</div>
	);
};

export default Search;
