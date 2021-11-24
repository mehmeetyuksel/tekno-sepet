import React from 'react'
import Product from './Product';
import { useProduct } from "../contexts/ProductContext"
import { Row, Col, Container, Spinner } from 'react-bootstrap'
function ProductList() {

    const { filteredProducts, isLoaded } = useProduct();

    return (
        <Container className="text-center">
            <Row xs={1} md={2} lg={3} xl={4} className="g-2">
                {isLoaded ? filteredProducts.length === 0 ? <Col>Please select a category to see products</Col> : filteredProducts.map((product) =>
                    <Col key={product.id}> <Product product={product} key={product.id} /> </Col>)
                    : <Col className="mx-auto my-auto pt-5"><div className="loading-page"><Spinner animation="border" role="status" style={{ height: "200px", width: "200px" }}>
                        <span className="visually-hidden">Loading...</span>
                    </Spinner></div> </Col>}
            </Row>
        </Container>
    )
}

export default ProductList
