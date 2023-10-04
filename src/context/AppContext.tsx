import { createContext } from "react";
import { IAppContext } from "../components/types";

export const defaultState = {};

export const AppContext = createContext<IAppContext>(defaultState);
