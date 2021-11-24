import React from 'react'
import { useParams } from "react-router-dom";
import { useProduct } from '../contexts/ProductContext';
import { Card, Col, Spinner, Button } from "react-bootstrap"
import { useFavorite } from '../contexts/FavoriteContext';
function ProductPage() {

    let { id } = useParams();
    const { state } = useProduct();
    const { favProducts, setFavProducts } = useFavorite();
    const data = state.filter((product) => product.id === id)


    const productExistsOnFavs = (productId) => {
        return favProducts.some(function (el) {
            return el.id === productId;
        });
    }

    const addFavorites = () => {
        setFavProducts((prev) => [...prev, data[0]])
    }
    const deleteFavorite = () => {
        const newFavProducts = favProducts.filter((el) => el.id !== data[0].id)
        setFavProducts(newFavProducts);
    }



    return (
        <>
            {
                state.length > 0 ? <div>
                    <Card style={{ width: '60%', margin: "0 auto" }}>
                        <Card.Img variant="top" style={{ height: "500px", width: "60%", margin: "0 auto" }} src={data[0].image} />
                        <Card.Body>
                            <Card.Title>{data[0].name}</Card.Title>
                            <Card.Text>
                                {data[0].content}
                            </Card.Text>

                            <Card.Footer>
                                {<Button className="btn" variant="outline-danger" style={{ width: "auto" }} onClick={productExistsOnFavs(data[0].id) ? deleteFavorite : addFavorites}>{productExistsOnFavs(data[0].id) ? <span>Remove &#10084;</span> : <span> Add your FavList &#9825; </span>}</Button>}
                            </Card.Footer>
                        </Card.Body>
                    </Card>
                </div> : <Col className="mx-auto my-auto pt-5"><div className="loading-page"><Spinner animation="border" role="status" style={{ height: "200px", width: "200px" }}>
                    <span className="visually-hidden">Loading...</span>
                </Spinner></div> </Col>
            }
        </>
    )
}

export default ProductPage
