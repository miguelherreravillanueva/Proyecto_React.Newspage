import axios from 'axios';
import React, { createContext, useReducer } from 'react';
import AppReducer from "./AppReducer"

const initialState = {
    hotNews: [],
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    const getNews = async () => {
        const res = await axios.get("https://api.nytimes.com/svc/topstories/v2/world.json?api-key=PH42EfGc4v2GQsitL5xe0Gg60qlWFvR4");
        dispatch({
            type: "GET_NEWS",
            payload: res.data.results,
        });
    };

    return (
        <GlobalContext.Provider
          value={{
            hotNews: state.hotNews,
            getNews,
          }}
        >
          {children}
        </GlobalContext.Provider>
      );
    
}

