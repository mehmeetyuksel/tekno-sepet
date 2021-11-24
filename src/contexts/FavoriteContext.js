import { createContext, useContext, useState } from "react";

const FavoriteContext = createContext();

const FavoriteProvider = ({ children }) => {


    const [favProducts, setFavProducts] = useState([]);


    return <FavoriteContext.Provider value={{ favProducts, setFavProducts }}>{children}</FavoriteContext.Provider>
}

const useFavorite = () => useContext(FavoriteContext)

export { FavoriteProvider, useFavorite }