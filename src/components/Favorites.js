import React from 'react'
import { useFavorite } from "../contexts/FavoriteContext"
import { Row, Col, Container, Alert, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import Product from "./Product"
function Favorites() {
  const { favProducts, setFavProducts } = useFavorite()
  const RemoveAll = () => {
    setFavProducts([]);
  }
  return (
    <div>
      <Container className="text-center">

        {
          favProducts.length > 0 ?
            <Container>
              <Col> <Button variant="btn btn-sm btn-danger" style={{ float: "right" }} onClick={() => RemoveAll()}>Clean your FavList</Button>  </Col>
              <Row xs={1} lg={4} className="g-1">

                {favProducts.map((product) =>
                  <Col sm={10} key={product.id}> <Product product={product} key={product.id} /> </Col>)}
              </Row>
            </Container>
            :

            <Alert variant="danger">
              <Alert.Heading>Hey, you have no favorite product!</Alert.Heading>
              <p>
                You don't have any favorite products on the list at the moment. You can add your favorite products to this list by clicking the heart icon below the products on the product list.
              </p>
              <hr />
              <p className="mb-0">
                To go to product list, you can visit the <Link to="/"> homepage.</Link>
              </p>
            </Alert>}




      </Container>
    </div>)

}

export default Favorites
