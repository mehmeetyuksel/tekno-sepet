import React, { useState } from 'react'
import '../App.css'
import { Card, Button } from 'react-bootstrap';
import { useFavorite } from "../contexts/FavoriteContext"
import { useCart } from "../contexts/CartContext"
import { Link } from "react-router-dom"
function Product({ product }) {
    const { setFavProducts, favProducts } = useFavorite();
    const { cart, setCart } = useCart();
    const index = cart.findIndex((element) => element.product.name === product.name);
    const [amount, setAmount] = useState(index > -1 ? cart[index].amount : 0)


    const addFavorites = () => {
        setFavProducts((prev) => [...prev, product])
    }
    const deleteFavorite = () => {
        const newFavProducts = favProducts.filter((el) => el.name !== product.name)
        setFavProducts(newFavProducts);
    }

    const productExistsOnFavs = (productName) => {
        return favProducts.some(function (el) {
            return el.name === productName;
        });
    }
    const productExistsOnCart = (productName) => {
        return cart.some(function (el) {
            return el.product.name === productName;
        });
    }


    const addToCart = () => {
        if (productExistsOnCart(product.name)) {
            let index = cart.findIndex(x => x.product.name === product.name)
            cart[index].amount++
            setAmount(amount + 1)
        }
        else {
            setAmount(amount + 1)
            setCart((prev) => [...prev, { amount: 1, product }])

        }
    }

    const deleteFromChart = () => {
        if (productExistsOnCart(product.name)) {
            let index = cart.findIndex(x => x.product.name === product.name)
            if (cart[index].amount >= 2) {
                cart[index].amount--
                setAmount(amount - 1)
            }
            else {
                cart[index].amount = 0;
                const newCart = cart.filter((el) => el.amount >= 1)
                setCart(newCart)
                setAmount(0)
            }
        }
        else {
            alert("This item is not on your cart already!")
        }
    }



    return (
        <div>
            <Card border="secondary" style={{ height: "300px" }}>
                <Link to={`/${product.id}`}>      <Card.Img variant="top" src={product.image} style={{ height: "150px", objectFit: "scale-down" }} /> </Link>
                <Card.Body>
                    <Card.Title as="h6">{product.name}</Card.Title>
                    <Card.Text>
                        {product.price}$, {product.category.split("_").join(" ")}
                    </Card.Text>
                    <Card.Footer style={{ position: "absolute", bottom: "0", left: "0", display: "flex", justifyContent: "space-between", width: "100%" }}>
                        <div style={{ width: "auto" }}>
                            <span onClick={deleteFromChart} style={{ cursor: "pointer" }}><img style={{ height: "30px", width: "auto" }} src="https://img.icons8.com/ios-glyphs/30/000000/minus.png" alt="Delete From Basket" />
                            </span>
                            <Button size="sm" variant={productExistsOnCart(product.name) ? "btn btn-danger" : "outline-secondary"} onClick={addToCart}><img style={{ height: "30px", width: "auto" }} src="https://img.icons8.com/external-tulpahn-detailed-outline-tulpahn/64/000000/external-add-to-cart-online-shopping-tulpahn-detailed-outline-tulpahn.png" alt="Add to Chart Icon" /> <span>{amount}</span></Button>

                            <span onClick={addToCart} style={{ cursor: "pointer" }}><img style={{ height: "30px", width: "auto" }} src="https://img.icons8.com/ios-glyphs/30/000000/plus.png" alt="Add Amount" /></span></div>

                        {<Button className="btn" variant="outline-danger" style={{ width: "50px" }} onClick={productExistsOnFavs(product.name) ? deleteFavorite : addFavorites}>{productExistsOnFavs(product.name) ? <span>&#10084;</span> : <span> &#9825; </span>}</Button>}
                    </Card.Footer>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Product
