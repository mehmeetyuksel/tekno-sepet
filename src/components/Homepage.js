import React from 'react'
import { Row,Container} from "react-bootstrap"
import Categories from './Categories'
import PagePagination from './PagePagination'
import ProductList from './ProductList'

function Homepage() {
    return (
        <div>
            <Container>
                    <Row><Categories /></Row>
                    <Row><ProductList /></Row>
                    <Row><PagePagination /></Row>
            </Container >
        </div>
    )
}

export default Homepage
