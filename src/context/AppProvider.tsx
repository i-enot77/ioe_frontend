import { FC } from 'react';
import { AppContext } from './AppContext';
import { ChildrenProp } from './types/index';

export const AppProvider: FC<ChildrenProp> = ({ children }: ChildrenProp) => {

	const value = {};

	return (
		<AppContext.Provider value={value}>
			{children}
		</AppContext.Provider>
	);
};
