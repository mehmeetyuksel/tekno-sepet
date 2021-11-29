import React from 'react'
import "../App.css"
import { useCart } from "../contexts/CartContext"
import BasketItem from './BasketItem';
import {Row, Col, Container, Button} from "react-bootstrap"



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
                <Container>
                <Row>
                <div className="header">
                    <h2 className="heading">Shopping Cart</h2>
                    <Button className="action btn-sm btn-danger" onClick={RemoveAll}>Remove all</Button>
                </div>
                <hr />
                </Row>
                <Row>
                {cart.map((product, key) => (
                    cart.length > 0 ? <BasketItem product={product} key={key} /> : <h1>"Your cart is empty. Go to homepage." </h1>
                ))}
                </Row>
                <Row>
                <div className="checkout">
                    <Col>
                    <div className="total">
                        <div>
                            <div className="subtotal">Sub-Total</div>
                            <div className="items">{cart.length} unique items</div>
                        </div>
                        <div className="total-amount">${cart.reduce(calculateTotal, 0)}</div>
                    </div>
                    </Col>
                    <Col  xs={12} md={7} lg={3} xl={2} className="ms-auto">
                    <button className="button">Complete Order</button>
                    </Col>
                </div>
                </Row>
                </Container>
            </div>
            
        </div>
    )
}

export default ShoppingBasket
