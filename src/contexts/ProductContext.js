import { createContext, useContext, useState, useEffect, useMemo } from "react";
import axios from "axios"

const ProductContext = createContext();



const ProductProvider = ({ children }) => {

    const [state, setState] = useState([])
    const [ProductCategory, setCategory] = useState({ Motherboard: true, Video_Card: true, Processor: true })
    const [SortPrice, setSortPrice] = useState(false)
    const [isLoaded, setIsLoaded] = useState(false)
    const [searchValue, setSearchValue] = useState("");


    useEffect(() => {
        axios.get("https://61961c3c44dd5400173d53ab.mockapi.io/clothes/products").then((data) => setState(data.data)).then(() => setIsLoaded(true))
    }, []);


    const filteredProducts = useMemo(() => {
        if (SortPrice === "HigherLower") {
            return state.filter((product) => ProductCategory[product.category] === true).sort((a, b) => (a.price - b.price > 0 ? 1 : -1)).filter((product) => product.name.toLowerCase().includes(searchValue.toLowerCase().trim()))
        }
        else if (SortPrice === "LowerHigher") {
            return state.filter((product) => ProductCategory[product.category] === true).sort((a, b) => (a.price - b.price < 0 ? 1 : -1)).filter((product) => product.name.toLowerCase().includes(searchValue.toLowerCase().trim()))
        }
        else {
            return state.filter((product) => ProductCategory[product.category] === true).filter((product) => product.name.toLowerCase().includes(searchValue.toLowerCase().trim()))
        }

    }, [state, ProductCategory, SortPrice, searchValue])


    useEffect(() => {
        console.log(filteredProducts)
    }, [filteredProducts])

  


    return <ProductContext.Provider value={{ filteredProducts, isLoaded, ProductCategory, setCategory, state, setSortPrice, SortPrice, setSearchValue, searchValue }}>{children}</ProductContext.Provider>
}

const useProduct = () => useContext(ProductContext)


export { ProductProvider, useProduct }