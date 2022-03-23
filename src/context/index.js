import React, { useState, createContext } from 'react';

export const context = createContext();

export const ContextProvider = (props) => {
    const [userData, setUserData] = useState({});
    const [userRepos, setUserRepos] = useState([]);
    const [userStarred, setUserStarred] = useState([]);
    const [userFollowers, setUserFollowers] = useState([]);

    return (
        <context.Provider value={{
            userData,
            userRepos,
            userStarred,
            userFollowers,
            setUserData,
            setUserRepos,
            setUserStarred,
            setUserFollowers
        }}>
            {props.children}
        </context.Provider>
    );
}
