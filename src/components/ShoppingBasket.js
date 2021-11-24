import React from 'react'
import "../App.css"
import { useCart } from "../contexts/CartContext"
import BasketItem from './BasketItem';



function ShoppingBasket() {

    const { cart, setCart } = useCart();
    const calculateTotal = function (accumulator, item) {
        return accumulator + (item.amount * item.product.price);
    };

    const RemoveAll = () => {
        setCart([])
    }

    return (
        <div className="cart-body">
            <div className="cart-container">
                <div className="header">
                    <h2 className="heading">Shopping Cart</h2>
                    <h5 className="action" onClick={RemoveAll}>Remove all</h5>
                </div>

                {cart.map((product, key) => (
                    cart.length > 0 ? <BasketItem product={product} key={key} /> : <h1>"Your cart is empty. Go to homepage." </h1>
                ))}

                <div className="checkout">
                    <div className="total">
                        <div>
                            <div className="subtotal">Sub-Total</div>
                            <div className="items">{cart.length} unique items</div>
                        </div>
                        <div className="total-amount">${cart.reduce(calculateTotal, 0)}</div>
                    </div>
                    <button className="button">Complete Your Order</button>
                </div>
            </div>
        </div>
    )
}

export default ShoppingBasket
