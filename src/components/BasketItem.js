import React from 'react'
import { useCart } from "../contexts/CartContext"
function BasketItem({ product }) {

    const { setCart, cart } = useCart();

    const RemoveProduct = (product) => {
        const newCart = cart.filter((el) => el.product.name !== product.product.name)
        setCart(newCart)
    }

    return (
        <div>
            <div className="cart-items">
                <div className="image-box">
                    <img src={product.product.image} style={{ height: "120px" }} alt="Product Icon" />
                </div>
                <div className="about">
                    <h1 className="title">{product.product.name}</h1>
                </div>

                <div className="count">{product.amount} Pieces</div>

                <div className="prices">
                    <div className="amount">${(product.product.price) * product.amount}</div>
                    <div className="remove" onClick={() => RemoveProduct(product)}><u>Remove</u></div>
                </div>



            </div> <hr />
        </div>
    )
}

export default BasketItem
