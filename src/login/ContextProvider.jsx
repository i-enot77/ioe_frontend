import { createContext, useEffect, useState } from "react";
import { CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js';
import UserPool from "../components/UserPool";

export const AppContext = createContext();

export const ContextProvider = ({children}) => {
    const[isLogged, setIsLogged] = useState(null);
    const[errMsg, setErrMsg] = useState("");
    const[windowWidth, setWindowWidth] = useState('');
        
    const authenticate = async (Username, Password) => {
        return await new Promise((resolve, reject) => {
            const user = new CognitoUser({ Username, Pool: UserPool});
            const authDetails = new AuthenticationDetails({ Username, Password});

            user.authenticateUser(authDetails, {
                onSuccess: (data) => {
                    resolve(data);
                },
                onFailure: (err) => {
                    setErrMsg("Invalid email or password")
                    reject(err);
                },
                newPasswordRequired: (data) => {
                    console.log("New password required", data);
                    resolve(data);
                },
            });
        });
    };

    const logout = async () => {
        return await new Promise ((resolve, reject) => {
            const user = UserPool.getCurrentUser();
                    if (user) {
                        user.signOut();
                        resolve(user);
                    } else {
                        reject();
                    }
        })
       
    };

    return (
        <AppContext.Provider value={{ isLogged, setIsLogged, errMsg, setErrMsg, authenticate, logout, windowWidth, setWindowWidth }}>
            {children}
        </AppContext.Provider>
    )
}