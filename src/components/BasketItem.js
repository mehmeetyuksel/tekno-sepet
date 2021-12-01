import React from 'react'
import { useCart } from "../contexts/CartContext"
import { Row, Col, Container, Button } from "react-bootstrap"
function BasketItem({ product }) {

    const { setCart, cart } = useCart();

    const RemoveProduct = (product) => {
        const newCart = cart.filter((el) => el.product.name !== product.product.name)
        setCart(newCart)
    }

    return (

        <Container>
            <Row>
                <div className="cart-items">

                    <Col>
                        <div className="image-box">
                            <img src={product.product.image} style={{ height: "120px", width: "120px" }} alt="Product Icon" />
                        </div>
                    </Col>

                    <Col xs={5} md={3} lg={5}>
                        <div className="about">
                            <h1 className="title">{product.product.name}</h1>
                        </div>
                    </Col>

                    <Col>
                        <div className="prices">
                            <div className="count">{product.amount} Pieces</div>
                            <div className="amount">${(product.product.price) * product.amount}</div>
                            <Button className="remove" variant="danger" size="sm" onClick={() => RemoveProduct(product)}>Remove</Button>
                        </div>
                    </Col>


                </div>
            </Row>
            <hr />
        </Container>

    )
}

export default BasketItem
