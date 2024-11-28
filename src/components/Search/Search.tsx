import React, { useContext, useState } from 'react';
import styles from './Search.module.css';

import { FaSearch } from 'react-icons/fa';
import { FiTarget } from 'react-icons/fi';
import { AppContext } from '../../context/AppProvider';

type Props = {
	cities: string[];
	setCities: React.Dispatch<React.SetStateAction<string[]>>;
};

const Search = ({ cities, setCities }: Props) => {
	const [searchValue, setSearchValue] = useState<string>('');

	const context = useContext(AppContext);
	if (!context) {
		throw new Error('AppContext must be used in an AppProvider');
	}

	const { setCity } = context;

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchValue(event.target.value);
	};

	const handleSubmit = async () => {
		if (searchValue) {
			if (!cities.includes(searchValue))
				setCities((prev) => [...prev, searchValue]);

			setCity(searchValue);

			setSearchValue('');
		}
	};

	return (
		<div className={styles.SearchContainer}>
			<div className={styles.searchLogoContainer}>
				<FaSearch />
			</div>

			<input
				className={styles.searchInput}
				type='text'
				value={searchValue}
				onChange={handleChange}
				placeholder='Search for cities...'
			/>

			<button className={styles.targetButton} onClick={handleSubmit}>
				<FiTarget />
			</button>
		</div>
	);
};

export default Search;
