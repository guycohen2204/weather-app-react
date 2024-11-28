import React, { useContext, useEffect, useState } from 'react';
import styles from './Search.module.css';

import { GoSearch } from 'react-icons/go';
import { FiTarget } from 'react-icons/fi';
import { AppContext } from '../../context/AppProvider';
import getAutoCompleteSuggestions from '../../api/getAutoCompleteSuggestions';
import AutoComplete from '../AutoComplete/AutoComplete';

type Props = {
	cities: string[];
	setCities: React.Dispatch<React.SetStateAction<string[]>>;
};

const Search = ({ cities, setCities }: Props) => {
	const [searchValue, setSearchValue] = useState<string>('');
	const [autoCompleteOptions, setAutoCompleteOptions] = useState<string[]>(
		[]
	);

	const context = useContext(AppContext);
	if (!context) {
		throw new Error('AppContext must be used in an AppProvider');
	}

	const { setCity } = context;

	const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
		const val: string = event.target.value;
		setSearchValue(val);

	};
	
	useEffect(() => {

		const checkSuggestions = async (val: string) => {

			if (val.trim()) {
				const suggestions: string[] = await getAutoCompleteSuggestions(val);
				setAutoCompleteOptions(suggestions);
		
				console.log(suggestions);
			} else {
				setAutoCompleteOptions([]);
			}

		}
		checkSuggestions(searchValue);
	}, [searchValue])

	const handleSubmit = async () => {
		if (searchValue.trim()) {
			if (!cities.includes(searchValue))
				setCities((prev) => [...prev, searchValue]);

			setCity(searchValue);
			setSearchValue('');
			setAutoCompleteOptions([]);
		}
	};

	return (
		<div className={styles.SearchContainer}>
			<div className={styles.searchLogoContainer}>
				<GoSearch />
			</div>

			<input
				className={styles.searchInput}
				type='text'
				value={searchValue}
				onChange={handleChange}
				placeholder='Search for cities...'
			/>
			{autoCompleteOptions.length > 0 && (
				<AutoComplete list={autoCompleteOptions} setSearchValue={setSearchValue} setCities={setCities} />
			)}

			<button className={styles.targetButton} onClick={handleSubmit}>
				<FiTarget />
			</button>
		</div>
	);
};

export default Search;
