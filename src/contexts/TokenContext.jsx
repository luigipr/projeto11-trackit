import { createContext, useState } from "react";

export const TokenContext = createContext();

export const TokenProvider = ({ children }) => {

    const [token, setToken] = useState('');

    const getToken = (token) => {setToken(token)};

    return (
        <TokenContext.Provider value={{ token, getToken }}>
            {children}
        </TokenContext.Provider>
    )
}
