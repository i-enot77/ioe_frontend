import { createContext } from 'react';
import { IAppContext } from './types';


export const defaultState = {};

export const AppContext = createContext<IAppContext>(defaultState);
