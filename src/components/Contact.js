import React from 'react'
import { Container, Alert } from "react-bootstrap"
function Contact() {
    return (
        <Container>
            <Alert variant="light">
                <Alert.Heading>Teknoloji Sepetim</Alert.Heading>
                <p>
                    This e-commerce project is created for ISMEK by Mehmet Yüksel. You can find some dummy products and their details on this project. Here, you can add them to your favorite list, shopping cart, visit the product's detail pages. Also, you can filter products by categories and sort by prices.  
                </p>
                <hr />
                <p className="mb-0">
                    To contact me on LinkedIn, please <a href="https://www.linkedin.com/in/mehmeetyuksel/">click.</a> <br/>Also, you can click <a href="https://github.com/mehmeetyuksel">here</a> for repository.
                </p>
            </Alert>
        </Container>
    )
}

export default Contact
