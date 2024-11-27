import React, { createContext, useState } from 'react';

type Theme = 'light' | 'dark';

type AppContextType = {
	city: string;
	setCity: (city: string) => void;
	theme: Theme;
	setTheme: (theme: Theme) => void;
};

export const AppContext = createContext<AppContextType | null>(null);

type Props = {
	children: React.ReactNode;
};

const AppProvider = ({ children }: Props) => {
	const [theme, setTheme] = useState<Theme>('light');
	const [city, setCity] = useState<string>('');

	const value = {
		theme,
		setTheme,
		city,
		setCity,
	};

	return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppProvider;
