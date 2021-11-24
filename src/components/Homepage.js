import React from 'react'
import { Row, Col, Container } from "react-bootstrap"
import Categories from './Categories'
import ProductList from './ProductList'
function Homepage() {
    return (
        <div>
            <Container>
                <Col>
                    <Row><Categories /></Row>
                    <Row><ProductList /></Row>
                </Col>
            </Container >
        </div>
    )
}

export default Homepage
