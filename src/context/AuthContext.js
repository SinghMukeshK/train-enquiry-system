import React, { useState, useReducer } from 'react';

import authReducer from './../reducer/AuthReducer';

export const AuthContext = React.createContext();

const initialState = {
    isAuthenticated: false,
    user: null,
    token: null,
    vacancies:[]
  };

const AuthProvider = (props) => {
    const [isAuthenticated, login] = useState(initialState)
    
    const [state, dispatch] = useReducer(authReducer, initialState);

    const handleUserLogin = (user, token) => {
        login(true);
    }
    return (
        <AuthContext.Provider value={{
            message: "I am the value from Auth context",
            isAuthenticated: isAuthenticated,
            login: handleUserLogin,
            state,
            dispatch

        }}>
            {props.children}
        </AuthContext.Provider >
    )
}

export default AuthProvider