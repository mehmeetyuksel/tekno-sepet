import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios"

const ProductContext = createContext();



const ProductProvider = ({ children }) => {

    const [state, setState] = useState([])
    const [ProductCategory, setCategory] = useState({ Motherboard: true, Video_Card: true, Processor: true })
    const [SortPrice, setSortPrice] = useState(false)
    
    const [isLoaded, setIsLoaded] = useState(false)
    const [searchValue, setSearchValue] = useState("");
   
    const [filteredProducts, setFilteredProducts] = useState([])
    const [paginatedProducts, setPaginatedProducts] = useState([])
    
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(8)
    const [totalPagesNum, setTotalPages] = useState(Math.ceil(filteredProducts.length / productsPerPage))

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;


    useEffect(() => {
        axios.get("https://61961c3c44dd5400173d53ab.mockapi.io/clothes/products").then((data) => setState(data.data)).then(() => setIsLoaded(true))
    }, []);


    // Filtering, Categorizing, Sorting process here

    useEffect(() => {
        if (SortPrice === "HigherLower") {
            setFilteredProducts(state.filter((product) => ProductCategory[product.category] === true).sort((a, b) => (a.price - b.price > 0 ? 1 : -1)).filter((product) => product.name.toLowerCase().includes(searchValue.toLowerCase().trim())));
        }
        else if (SortPrice === "LowerHigher") {

            setFilteredProducts(state.filter((product) => ProductCategory[product.category] === true).sort((a, b) => (a.price - b.price < 0 ? 1 : -1)).filter((product) => product.name.toLowerCase().includes(searchValue.toLowerCase().trim())));

        }
        else {
            setFilteredProducts(state.filter((product) => ProductCategory[product.category] === true).filter((product) => product.name.toLowerCase().includes(searchValue.toLowerCase().trim())));

        }

    }, [state, ProductCategory, SortPrice, searchValue, productsPerPage])

    // Calculating total pages

    useEffect(() => {
        setTotalPages(Math.ceil(filteredProducts.length / productsPerPage))
    }, [filteredProducts, productsPerPage, totalPagesNum])


    // Pagination of products

    useEffect(() => {
        setPaginatedProducts(filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct))
    }, [indexOfFirstProduct, indexOfLastProduct, filteredProducts])


    return <ProductContext.Provider value={{ paginatedProducts, isLoaded, ProductCategory, setCategory, state, setSortPrice, SortPrice, setSearchValue, searchValue, currentPage, setCurrentPage, totalPagesNum }}>{children}</ProductContext.Provider>
}

const useProduct = () => useContext(ProductContext)


export { ProductProvider, useProduct }