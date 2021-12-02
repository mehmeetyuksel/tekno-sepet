import React from 'react'
import { Container, Navbar, Nav } from "react-bootstrap"
import { useCart } from "../contexts/CartContext"
import { useFavorite } from "../contexts/FavoriteContext"
import { Link } from "react-router-dom";
import "../App.css"
function NavigationBar() {

  const { cart } = useCart();
  const { favProducts } = useFavorite()
  return (

    <Navbar collapseOnSelect expand="xl" bg="light" variant="light">
      <Container>

        <Navbar.Brand><img style={{ height: "40px", width: "auto" }} src="https://img.icons8.com/external-icongeek26-outline-colour-icongeek26/64/000000/external-technology-mobile-application-icongeek26-outline-colour-icongeek26.png" alt="Brand Logo" /> Teknoloji Sepetim </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link eventKey={2}><Link className="navbar-link" to="/">Homepage </Link></Nav.Link>
            <Nav.Link eventKey={2}><Link className="navbar-link" to="/about-us">About Us</Link>
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link eventKey={2}><Link className="navbar-link" to="/favs">Favorite List &#10084; {favProducts.length}</Link></Nav.Link>
            <Nav.Link eventKey={2}>  <Link className="navbar-link" to="/cart">
              My Cart <i class="bi bi-cart" style={{ color: cart.length > 0 ? "red" : "" }}></i> {cart.length}
            </Link> </Nav.Link>
          </Nav>

        </Navbar.Collapse>

      </Container>
    </Navbar>


  )
}

export default NavigationBar
