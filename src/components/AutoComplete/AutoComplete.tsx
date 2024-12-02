import React, { useContext } from 'react';

import styles from './AutoComplete.module.css';
import { AppContext } from '../../context/AppProvider';

type Props = {
	list: string[];
	setSearchValue: React.Dispatch<React.SetStateAction<string>>;
	setCities: React.Dispatch<React.SetStateAction<string[]>>;
	show: boolean
};

const AutoComplete = ({ list, setSearchValue, setCities, show }: Props) => {
	const context = useContext(AppContext);
	if (!context) {
		throw new Error('AppContext must be used in an AppProvider');
	}

	const { setCity } = context;

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		const selectedOption: string = event.currentTarget.value;

		setSearchValue('');
		setCity(selectedOption);
		setCities((prev) => [selectedOption, ...prev]);
	};

	return show ? (
		<div className={styles.autoCompleteContainer}>
			{list.map((item: string, index: number) => (
				<button
					key={index}
					className={styles.autoCompleteItem}
					value={item}
					onClick={handleClick}
				>
					{item}
				</button>
			))}
		</div>
	) : (
		<></>
	);
};

export default AutoComplete;
